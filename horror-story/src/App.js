import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HorrorStory from "./components/HorrorStory/HorrorStory";
import VoiceToText from "./components/VoiceToText/VoiceToText";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <Landing />
      <HorrorStory />
      <VoiceToText />
    </>
  );
}

export default App;
