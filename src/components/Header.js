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
              {/* <Link className="nav-item nav-link" to="/Quizzzy"></Link> */}
              <ul className="navbar">
                <Link className="navbar-brand " to="/">
                  <img src={qlogo} alt="logo" />
                </Link>
                <Link to="/Quizzzy">
                  <button className="btns">Teachers</button>
                </Link>
                <Link to="/Students">
                  <button className="btns">Students</button>
                </Link>

                <Link to="/">
                  <button className="btns">Home</button>
                </Link>

                <button
                  className=" btn-outline-dark "
                  onClick={() => auth.signOut()}
                >
                  Logout
                </button>
              </ul>
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
