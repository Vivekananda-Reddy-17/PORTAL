import dns from 'dns';
// Use public DNS for SRV lookups to prevent querySrv ECONNREFUSED
dns.setServers(['8.8.8.8', '1.1.1.1']);

import express from 'express'
import { createServer } from 'node:http';
import { connectToSocket } from './controllers/socketManager.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./routes/users.routes.js";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
const PORT = 8000;

app.use(cors());
app.set('port', (process.env.PORT || 8000));
app.use(express.json({limit: '40kb'}));
app.use(express.urlencoded({limit: '40kb', extended: true }));    

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const start = async () => {
    
    const connectionDB = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected:", connectionDB.connection.host);

    server.listen(app.get('port'), () => {
        console.log("Listening on port", app.get('port'));
    });
}

start();