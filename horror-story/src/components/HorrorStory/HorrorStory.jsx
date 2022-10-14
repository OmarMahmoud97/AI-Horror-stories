import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HorrorStory.scss";

const HorrorStory = (props) => {
  const [comments, setComments] = useState();
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const userPrompt = props.result;

    let openAiPrompt = `Topic: Horror\nSeven-Sentence Horror Story:`;

    setComments(userPrompt);

    const startingStr = openAiPrompt + " \nYou:" + userPrompt;

    axios
      .post(
        `https://api.openai.com/v1/completions`,
        {
          model: "text-davinci-002",
          prompt: startingStr,
          temperature: 0.5,
          max_tokens: 60,
          top_p: 1,
          frequency_penalty: 1,
          presence_penalty: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )

      .then((response) => {
        console.log(response);
        setResponse(response.data.choices[0].text);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.result]);

  return (
    <>
      <video className="background-video" autoPlay loop muted poster="">
        <source src="" type="" />
      </video>

      <section className="navbar">
        <nav className="navbar__container">
          <div className="navbar__wrapper">
            <div className="navbar__left">
              <div className="navbar__date">
                <p className="navbar__date-text" id="clock">
                  <span id="clock"></span>
                </p>
              </div>
            </div>
            <div className="navbar__center">Horror Story</div>
            <div className="navbar__right"></div>
          </div>
        </nav>
      </section>
      <section className="chatbox">
        <div className="chatbox__wrapper">
          <div className="chatbox__container">
            <div className="chatbox__left">
              {loading && <p className="chatbox__left-msg">Loading...</p>}
              {response && <p className="chatbox__left-msg">{response}</p>}
            </div>
            <div className="chatbox__right"></div>
            <div className="chatbox__left"></div>
          </div>
          <div className="chatbox__form">
            <textarea
              className="chatbox__input"
              name="message"
              placeholder="Type your message here ..."
              type="submit"
              enterKeyHint="send"
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorrorStory;
