import { useState } from "react";
import HorrorStory from "./components/HorrorStory/HorrorStory";
import VoiceToText from "./components/VoiceToText/VoiceToText";
import Landing from "./components/Landing/Landing";
import bgVid from "./assets/videos/lightning.mp4";

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
      <Landing />
      <div className="ai-container">
        <video className="background-video" autoPlay loop muted poster="">
          <source src={bgVid} type="video/mp4" />
        </video>
        <div className="ai-wrapper">
          <HorrorStory result={result} />
          <VoiceToText
            onClick={onClickHandler}
            isSpeaking={isSpeaking}
            result={result}
          />
        </div>
      </div>
    </>
  );
}

export default App;
