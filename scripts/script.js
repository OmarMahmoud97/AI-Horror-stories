// form handling

let startingStr = `Topic: Breakfast\nTwo-Sentence Horror Story: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.\n    \nTopic: Wind\nTen-Sentence Horror Story:`;
const handleForm = (event) => {
  event.preventDefault();
  // chatBox.innerHTML = "";
  const formData = {
    message: event.target.message.value,
  };

  createNewComment(event.target.message.value);

  // startingStr = event.target.message.value;

  startingStr = startingStr + " \nYou:" + event.target.message.value;
  axios
    .post(
      `https://api.openai.com/v1/completions`,
      {
        model: "text-davinci-002",
        prompt: startingStr,
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
      }
    )

    .then((response) => {
      // createNewComment(response.data.choices[0].text);
      console.log(response);
      createNewResponse(response.data.choices[0].text);
      clearInput();
    });
};

// create comment div
const createNewComment = (message) => {
  const messageInput = document.createElement("div");
  messageInput.classList.add("chatbox__right");
  const chatBox = document.querySelector(".chatbox__container");

  const msg = document.createElement("p");
  msg.classList.add("chatbox__right-msg");
  msg.innerText = message;
  messageInput.appendChild(msg);

  chatBox.appendChild(messageInput);
};

// create response
const createNewResponse = (response) => {
  const ResponseOutput = document.createElement("div");
  ResponseOutput.classList.add("chatbox__left");
  const chatBox = document.querySelector(".chatbox__container");

  const res = document.createElement("p");
  res.classList.add("chatbox__left-msg");
  res.innerText = response;
  ResponseOutput.appendChild(res);

  chatBox.appendChild(ResponseOutput);
};

const inputField = document.querySelector(".chatbox__input");

// handle the submit
const registerSubmitHandler = (e) => {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleForm);
  inputField.target.reset();
};
const clearInput = () => {
  inputField.value = "";
};
registerSubmitHandler();
