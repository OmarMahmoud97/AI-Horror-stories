import { useState } from "react";
import "./VoiceToText.scss";

export default function VoiceTotext(props) {
  return (
    <div className="App container">
      <section className="voiceToText">
        <div className="voiceToText__wrapper">
          <div className="voiceToText__header-container">
            <h1 className="voiceToText__header">Voice 2 Text</h1>
          </div>
          <div className="voiceToText__textbox">
            <div className="voiceToText__container">
              <p className="voiceToText__text">
                {props.isSpeaking ? "Speak Now..." : "..."}
              </p>
              <p className="voiceToText__voice">
                {props.result && props.result}
              </p>
            </div>
          </div>
          <div className="voiceToText__button">
            <button onClick={props.onClick} className="voiceToText__speak">
              Click & Speak!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
