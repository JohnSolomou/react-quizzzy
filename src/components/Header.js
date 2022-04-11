// Our <Header> component also render different links depending on the authenticated state.

// src/component/Header.js
import React from "react";
import { Link } from "react-router-dom";
import qlogo from "../img/qlogo.png";
import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";

function Header() {
  const auth = getAuth();
  return (
    <header className="">
      <nav
        data-testid="header-1"
        className="navbar navbar-expand-md navbar-light  "
      >
        {/* <svg
          class="primary-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 310"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L48,245.3C96,203,192,117,288,80C384,43,480,53,576,96C672,139,768,213,864,240C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path> </svg> */}

        {/* <Link className="navbar-brand m-2" to="/">
          HomePage
        </Link> */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          {auth.currentUser ? (
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/Quizzzy"></Link>
              <ul class="navbar">
                <Link className="navbar-brand " to="/">
                  <img src={qlogo} alt="logo" />
                </Link>
                <Link to="/Quizzzy">
                  <button class="btns">Teachers</button>
                </Link>
                <Link to="/students">
                  <button class="btns">Students</button>
                </Link>
                <li>
                  <Link to="/">
                    <button>Home</button>
                  </Link>
                </li>
              </ul>
              <button
                className=" btn-outline-dark "
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-nav m-2 ">
              <Link className="navbar-brand " to="/">
                <img src={qlogo} alt="logo" />
              </Link>
              <Link className="nav-item nav-link  center" to="/login">
                Sign In
              </Link>
              <Link className="nav-item nav-link center" to="/signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
