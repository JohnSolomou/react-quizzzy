// Our <Header> component also render different links depending on the authenticated state.

// src/component/Header.js
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import qlogo from "../img/qlogo.png";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
import { useAuth } from "../context/AuthContext";
function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (error) {
      setError("Failed to log out");
    }
  }
  return (
    <header className="">
      <nav
        data-testid="header-1"
        className="navbar navbar-expand-md navbar-light "
      >
        <Link className="m-right " to="/">
          <img src={qlogo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          {currentUser ? (
            <div className="navbar-nav">
              <ul className="navbar">
                <Link to="/CreateQuiz">
                  <button className="btns">Create Quiz</button>
                </Link>
                <Link to="/TakeQuiz">
                  <button className="btns">Take Quiz</button>
                </Link>

                <Link to="/">
                  <button className="btns">Home</button>
                </Link>

                <button
                  className=" btns btn-outline-dark "
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <div className="m-4">
                  <strong>Signed in as : </strong>
                  {currentUser.email}
                  {error && <Alert variant="danger">{error}</Alert>}
                </div>
              </ul>
            </div>
          ) : (
            <div className="navbar-nav m-2 ">
              <Link className="nav-item nav-link signin" to="/login">
                Sign In
              </Link>
              <Link className="nav-item nav-link signin" to="/signup">
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
