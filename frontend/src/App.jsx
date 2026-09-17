import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/theme.css";

import ThemeProvider from "./context/ThemeProvider";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import VideoMeet from './pages/VideoMeet';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:url" element={<VideoMeet/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;