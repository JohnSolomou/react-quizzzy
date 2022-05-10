// src/pages/CreateQuiz.js
import React, { useState } from "react";
import Header from "../components/Header";
// import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function CreateQuiz() {
  const [sent, setSent] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleSend = () => {
    // e.preventDefault();
    const quiz = {
      questions: question,
      answers: answer,
    };

    fetch("http://localhost:4000/createQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quiz),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log(res.json());
        setSent(true);
        console.log("new quiz created");
      })
      .catch((e) => {
        // debugger;
        console.log("**** Error: ", e);
      });
  };

  return (
    <div>
      <Header />

      <div style={{ minHeight: "900px" }} className="primary-color center form">
        {!sent ? (
          <form>
            <div>
              <h1 className="primary-color">Create yor quiz here.</h1>
              <textarea
                placeholder="put your question here"
                value={question}
                id="myTextarea"
                cols="30"
                rows="10"
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>

            <input
              placeholder="answer"
              value={answer}
              id="answer"
              name="answer"
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button type="button" onClick={() => handleSend()}>
              Submit
            </button>
            <button type="button">Next Question</button>
          </form>
        ) : (
          <h2>Question and answer added</h2>
        )}
      </div>
    </div>
  );
}
