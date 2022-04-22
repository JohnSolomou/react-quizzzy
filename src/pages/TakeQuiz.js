import React from "react";
import Head from "../components/Header";
export default function Students() {
  return (
    <div>
      <Head></Head>
      <div style={{ minHeight: "900px" }} id="questions" class="primary-color">
        <div class="primary-color center">
          <h1 class="primary-color">Take your Quiz here.</h1>
          <h1 id="question" class="primary-color">
            hello
          </h1>
        </div>
        <div id="question-details" class="primary-color center">
          <input placeholder="answer" type="text" id="studentanswer" />
          <button id="submit" onclick="nextQuestion()">
            submit
          </button>
          <span id="err"></span>
        </div>
      </div>
      <div id="score" class="primary-color">
        <h1>Score</h1>
        <h2 id="scoreQuestion" class="primary-color">
          Total Questions
        </h2>
        <h2 id="scoreCorrect" class="primary-color">
          Correct Answers
        </h2>
        <h2 id="wrongAnswer" class="primary-color">
          Wrong Answers
        </h2>
      </div>
    </div>
  );
}
