import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import plane from "../img/paper_plane_with_trail.png";
import globe from "../img/earth.png";
import teachers from "../img/teachers.jpg";
import phone from "../img/person_holding_phone.png";
import people from "../img/people_at_home.png";
import around_globe from "../img/people_around_globe.png";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Home() {
  return (
    <div>
      <Header />
      <div data-testid="home-1">
        {/* <Header /> */}

        <div className=" plain container-fluid primary-color">
          <div className="  row">
            <div className=" col ">
              <div className="hero-title ">
                <h1>engage everyone, </h1>
                <h1>everywhere</h1>
              </div>

              <div className="hero-desc  ">
                <h4>Free Quiz tool to teach and learn anything,</h4>
                <h4> on any device, in‑person or remotely.</h4>
              </div>
              <div className=" "></div>
              <div className="hero-login ">
                <p>
                  Don't have an account?
                  <a className="btn btn-primary" href="/Signup" role="button">
                    Sign Up
                  </a>
                </p>
              </div>
              <div className="section-footer ">
                <div className="globe-image">
                  <img src={globe} alt="globe" />
                  Used by more than 5 million students in schools, homes, and
                  offices around the world.
                </div>
              </div>
              <div className="plane plane-center">
                <img src={plane} alt="" />
              </div>
            </div>
            <div className="hero-section-right col">
              <img className="" src={teachers} width="90%" alt="" />
            </div>
          </div>
        </div>
        <div className="scaling-svg-container">
          <svg
            className="invert"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 310"
          >
            <path
              fill="#68c2e8"
              fillOpacity="1"
              d="M0,288L48,245.3C96,203,192,117,288,80C384,43,480,53,576,96C672,139,768,213,864,240C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <h2 className="distance ">Using Quizzzy for Distance Learning</h2>
        </div>
        <section className="center">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={phone} alt="person holding phone" />
                <div>
                  <h4>Students ALWAYS see questions on their own screen.</h4>
                </div>
              </div>
              <div className="col">
                <img src={people} alt="people at home" />
                <div>
                  <h4>
                    Bring people together (apart) with live quizzes and polls.
                  </h4>
                </div>
              </div>
              <div className="col">
                <img src={around_globe} alt="" />
                <div>
                  <h4>Assign quizzes and engage families on their own time.</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2>Quiz creator 101: where to start? </h2>
              <p>
                Are you a teacher or trainer looking to drive learner
                engagement? Regardless of which, you need to figure out why you
                want to make a quiz. Then consider who your audience is and what
                do you want them to accomplish. How does that tie into your
                goals? Let's walk through some examples to kickstart your
                imagination.
              </p>
            </div>
            <div className="col">
              <h2>
                Use a quiz builder to give students an engaging learning
                experience
              </h2>
              <p>
                learning experience Ever been excited by the phrase “It’s test
                time!”? Didn’t think so. Sure, quizzes should first and foremost
                track a student’s progress—but they can be fun, too. If you’re
                in a traditional education setting, an online quiz creator makes
                a great, interactive addition to in-class exercises.
              </p>
            </div>
            <div className="col">
              <h2>Create a quiz to make placement a breeze</h2>
              <p>
                If you're teaching different levels, use an online quiz to make
                sure your students are placed in the right class. It's a great
                way to introduce new students to your teaching style, making
                them comfortable and keeping them confident at the same time.
                The last thing you want is placing someone at the wrong level,
                either making learning too easy or too difficult. Use a
                placement quiz to find your learner's Goldilocks zone.
              </p>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
}
