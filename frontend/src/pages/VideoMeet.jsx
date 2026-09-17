import { useRef, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";

const peerConfigConnections = {
  iceServers: [
    {
      urls: [
        "stun:stun.l.google.com:19302",
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
        "stun:stun3.l.google.com:19302",
        "stun:stun4.l.google.com:19302",
      ],
    },
  ],
};

function VideoMeet() {
  let socketRef = useRef();
  let socketIdRef = useRef();
  let localVideoRef = useRef();

  let [videoAvailable, setVideoAvailable] = useState(true);
  let [audioAvailable, setAudioAvailable] = useState(true);
  let [screenAvailable, setScreenAvailable] = useState();

  let [video, setVideo] = useState();
  let [audio, setAudio] = useState();
  let [screen, setScreen] = useState();
  let [showModal, setModal] = useState();
  let [videos, setVideos] = useState([]);
  let [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");
  let [newMessages, setNewMessages] = useState(0);
  let [askForUsername, setAskForUsername] = useState(true);
  let [username, setUsername] = useState("");

  const videoRef = useRef();

  const getPermissions = async () => {
    try {
      const videoPermission = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoPermission) {
        setVideoAvailable(true);
        console.log("Video permission granted");
      } else {
        setVideoAvailable(false);
        console.log("Video permission denied");
      }

      const audioPermission = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      if (audioPermission) {
        setAudioAvailable(true);
        console.log("Audio permission granted");
      } else {
        setAudioAvailable(false);
        console.log("Audio permission denied");
      }

      if (navigator.mediaDevices.getDisplayMedia) {
        setScreenAvailable(true);
      } else {
        setScreenAvailable(false);
      }

      if (videoAvailable || audioAvailable) {
        const userMediaStream = await navigator.mediaDevices.getUserMedia({
          video: videoAvailable,
          audio: audioAvailable,
        });
        if (userMediaStream) {
          window.localStream = userMediaStream;
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = userMediaStream;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  let getUserMedia = () => {
    if((video && videoAvailable) ||(audio && audioAvailable)){
      navigator.mediaDevices.getUserMedia({video: video, audio: audio})
      .then(()=>{})
      .then((stream) => {})
      .catch((e) => {console.log(e)});
    }else{
      try {
        let tracks = localVideoRef.current.srcObject.getTracks();
        tracks.forEach((trank) => tracks.stop);
      } catch (error) {

    }
  }

  // Get permissions when component loads
  useEffect(() => {
    getPermissions();
  }, []);

  useEffect(() => {
    if(video===undefined || audio===undefined){
      getUserMedia();
    }
  }, [audio, video]);

  let getMedia = () => {
    setVideo(videoAvailable);
    setAudio(audioAvailable);
    connectToSocketServer();
  }

  let connect = () => {
    setAskForUsername(false);
    getMedia();
  }

  // Attach stream whenever the video element exists
  useEffect(() => {
    if (localVideoRef.current && window.localStream) {
      console.log("Attaching stream to video element");

      localVideoRef.current.srcObject = window.localStream;

      localVideoRef.current
        .play()
        .then(() => {
          console.log("Video playing");
        })
        .catch((err) => {
          console.log("Video play error:", err);
        });
    }
  }, [videoAvailable, audioAvailable]);

  return (
    <div>
      {askForUsername === true ? (
        <div>
          <h2>Enter into Portal</h2>

          <TextField
            id="outlined-basic"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
          />

          <Button variant="contained">Connect</Button>

          <div>
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              style={{
                width: "500px",
                height: "350px",
                objectFit: "cover",
                backgroundColor: "red",
              }}
            ></video>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default VideoMeet;
