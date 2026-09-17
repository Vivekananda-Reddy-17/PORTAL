import { Server } from "socket.io";

let connections = {};
let timeOnline = {};
let messages = {};

export const connectToSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["*"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join a room
    socket.on("join-call", (path) => {
      if (!connections[path]) {
        connections[path] = [];
      }

      connections[path].push(socket.id);
      timeOnline[socket.id] = Date.now();

      // Notify everyone in the room
      connections[path].forEach((id) => {
        io.to(id).emit("user-joined", socket.id);
      });

      // Send previous chat messages to the newly joined user
      if (messages[path]) {
        messages[path].forEach((message) => {
          io.to(socket.id).emit(
            "chat-message",
            message.data,
            message.sender,
            message["socket-id-sender"]
          );
        });
      }
    });

    // Forward WebRTC signaling messages
    socket.on("signal", (toId, signalData) => {
      io.to(toId).emit("signal", socket.id, signalData);
    });

    // Receive chat message
    socket.on("chat-message", (data, sender) => {
      const [matchingRoom, found] = Object.entries(connections).reduce(
        ([room, isFound], [roomKey, roomUsers]) => {
          if (!isFound && roomUsers.includes(socket.id)) {
            return [roomKey, true];
          }
          return [room, isFound];
        },
        ["", false]
      );

      if (!found) return;

      if (!messages[matchingRoom]) {
        messages[matchingRoom] = [];
      }

      // Save message
      messages[matchingRoom].push({
        data,
        sender,
        "socket-id-sender": socket.id,
      });

      console.log(`[${matchingRoom}] ${sender}: ${data}`);

      // Broadcast to everyone in the room
      connections[matchingRoom].forEach((id) => {
        io.to(id).emit(
          "chat-message",
          data,
          sender,
          socket.id
        );
      });
    });

    // Disconnect
    socket.on("disconnect", () => {
      const diffTime = Date.now() - timeOnline[socket.id];

      console.log(
        `${socket.id} disconnected after ${Math.floor(diffTime / 1000)} seconds`
      );

      delete timeOnline[socket.id];

      for (const [room, users] of Object.entries(connections)) {
        const index = users.indexOf(socket.id);

        if (index !== -1) {
          // Notify remaining users
          users.forEach((id) => {
            io.to(id).emit("user-left", socket.id);
          });

          // Remove socket
          users.splice(index, 1);

          // Delete empty room and its chat history
          if (users.length === 0) {
            delete connections[room];
            delete messages[room];
          }

          break;
        }
      }
    });
  });

  return io;
};