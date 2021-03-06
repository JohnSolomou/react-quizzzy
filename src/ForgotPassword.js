import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
// import qlogo from "../img/qlogo.png";
import Footer from "./components/Footer";
import Head from "./components/Header";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  // const passwordRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }
  return (
    <div>
      <Head />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "60vh" }}
      >
        <div>
          <Card style={{ minWidth: "500px", minHeight: "300px" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required ref={emailRef} />
                </Form.Group>

                <Button
                  disabled={loading}
                  className="w-100"
                  style={{ marginTop: "20px" }}
                  type="submit"
                >
                  Reset Password
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Log in</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account?<Link to="/Signup"> Sign Up</Link>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}
