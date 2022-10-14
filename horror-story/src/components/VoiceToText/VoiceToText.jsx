import { useState } from "react";
import "./VoiceToText.scss";

export default function VoiceTotext() {
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    recognition.start();
    setIsSpeaking(!isSpeaking);
  };

  recognition.onresult = function (e) {
    let transcript = e.results[0][0].transcript;
    setResult(transcript);
  };
  return (
    <div className="App container">
      <section className="voiceToText">
        <div className="voiceToText__wrapper">
          <div className="voiceToText__header-container">
            <h1 className="voiceToText__header">Voice 2 Text</h1>
          </div>
          <div className="voiceToText__textbox">
            <div className="voiceToText__wrapper">
              <p className="voiceToText__text">
                {isSpeaking ? "Speaking..." : "Waiting..."}
              </p>
              <p className="voiceToText__voice">{result && result}</p>
            </div>
          </div>
          <div className="voiceToText__button">
            <button onClick={onClickHandler} className="voiceToText__speak">
              Click here!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
