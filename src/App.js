import { useState } from "react";
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
      <Landing />
      <div className="ai-container">
        <HorrorStory result={result} />
        <VoiceToText
          onClick={onClickHandler}
          isSpeaking={isSpeaking}
          result={result}
        />
      </div>
    </>
  );
}

export default App;
