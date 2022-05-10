import React, { useEffect, useState } from "react";
import Head from "../components/Header";
export default function Students() {
  const [question, setQuestion] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/quiz").then((res) =>
        res.json()
      );
      setQuestion(response[0].questions);
    })();
  }, []);

  return (
    <div>
      <Head></Head>
      <div
        style={{ minHeight: "900px" }}
        id="questions"
        className="primary-color"
      >
        <div className="primary-color center">
          <h1 className="primary-color">Take your Quiz here.</h1>
          <h1 id="question" className="primary-color">
            {question}
          </h1>
        </div>
        <div id="question-details" className="primary-color center">
          <input placeholder="answer" type="text" id="studentanswer" />
          {/* <button id="submit" onClick="nextQuestion()">
            submit
          </button> */}
          <span id="err"></span>
        </div>
      </div>
      <div id="score" className="primary-color">
        <h1>Score</h1>
        <h2 id="scoreQuestion" className="primary-color">
          Total Questions
        </h2>
        <h2 id="scoreCorrect" className="primary-color">
          Correct Answers
        </h2>
        <h2 id="wrongAnswer" className="primary-color">
          Wrong Answers
        </h2>
      </div>
    </div>
  );
}
