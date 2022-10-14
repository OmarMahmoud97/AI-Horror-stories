import logo from "./logo.svg";
// import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HorrorStory from "./components/HorrorStory/HorrorStory";
import VoiceToText from "./components/VoiceToText/VoiceToText";
import Landing from "./components/Landing/Landing";

function App() {
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [result, setResult] = useState("");

  recognition.onresult = function (e) {
    let transcript = e.results[0][0].transcript;

    setResult(transcript);
  };

  const onClickHandler = () => {
    recognition.start();
    setIsSpeaking(!isSpeaking);
  };
  return (
    <>
      <HorrorStory result={result} />
      <VoiceToText
        onClick={onClickHandler}
        isSpeaking={isSpeaking}
        result={result}
      />
    </>
  );
}

export default App;
