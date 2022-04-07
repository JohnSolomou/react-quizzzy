import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import teachers from "../img/teachers.jpg";
import globe from "../img/globe.png";
import "../css/styles.css";
export default class HomePage extends Component {
  render() {
    return (
      <div data-testid="home-1">
        <Header></Header>
        <section>
          <div className="text-center">
            <p>
              Don't have an account?
              <a className="btn btn-primary" href="/Signup" role="button">
                Sign Up
              </a>
            </p>
          </div>
        </section>
        <section>
          <div class="center">
            <svg
              class="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 310"
            >
              <path
                fill="rgb(122, 184, 148)"
                fill-opacity="1"
                d="M0,288L48,245.3C96,203,192,117,288,80C384,43,480,53,576,96C672,139,768,213,864,240C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <img class="center" src={teachers} width="50%" alt="" />
          </div>
          <p>
            <h1 class="hero">Teachers Create Quizzes</h1>
            <h1 class="hero">Students Take Quizzes</h1>
          </p>
        </section>

        <section class="white">
          <img class="globe" src={globe} alt="" />
          <div>
            <h2>Quiz creator 101: where to start? </h2>
            <p>
              Are you a teacher or trainer looking to drive learner engagement?
              Regardless of which, you need to figure out why you want to make a
              quiz. Then consider who your audience is and what do you want them
              to accomplish. How does that tie into your goals? Let's walk
              through some examples to kickstart your imagination.
            </p>
            <h2>
              Use a quiz builder to give students an engaging learning
              experience
            </h2>
            <p>
              learning experience Ever been excited by the phrase “It’s test
              time!”? Didn’t think so. Sure, quizzes should first and foremost
              track a student’s progress—but they can be fun, too. If you’re in
              a traditional education setting, an online quiz creator makes a
              great, interactive addition to in-class exercises.
            </p>
            <h2>Create a quiz to make placement a breeze</h2>
            <p>
              If you're teaching different levels, use an online quiz to make
              sure your students are placed in the right class. It's a great way
              to introduce new students to your teaching style, making them
              comfortable and keeping them confident at the same time. The last
              thing you want is placing someone at the wrong level, either
              making learning too easy or too difficult. Use a placement quiz to
              find your learner's Goldilocks zone.
            </p>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
