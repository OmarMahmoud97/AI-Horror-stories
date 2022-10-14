import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HorrorStory from "./components/HorrorStory/HorrorStory";
import VoiceTotext from "./components/VoiceTotext/VoiceTotext";

function App() {
  return (
    <>
      <HorrorStory />
      <VoiceTotext />
    </>
  );
}

export default App;
