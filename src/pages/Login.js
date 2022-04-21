import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
// import qlogo from "../img/qlogo.png";
import Footer from "../components/Footer";
import Head from "../components/Header";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
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
              <h2 className="text-center mb-4">Log In</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required ref={emailRef} />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required ref={passwordRef} />
                </Form.Group>

                <Button
                  disabled={loading}
                  className="w-100"
                  style={{ marginTop: "20px" }}
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
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

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import Header from "../components/Header";
// import "../css/styles.css";
// export default class SignUp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       error: null,
//       email: "",
//       password: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     this.setState({ error: "" });
//     const authentication = getAuth();
//     try {
//       await createUserWithEmailAndPassword(
//         authentication,
//         this.state.email,
//         this.state.password
//       );
//     } catch (error) {
//       this.setState({ error: error.message });
//     }
//   }

//   render() {
//     return (
//       <div id="login">
//         <Header></Header>
//         {/* <h3 class="text-center text-white pt-5">Sign up form</h3> */}
//         <div className="container">
//           <div
//             id="login-row"
//             className="row justify-content-center align-items-center"
//           >
//             <div id="login-column" className="col-md-6">
//               <div id="login-box" className="col-md-12">
//                 <form
//                   id="login-form"
//                   className="form"
//                   autoComplete="off"
//                   onSubmit={this.handleSubmit}
//                 >
//                   <h1>
//                     Sign Up to To Quizzzy
//                     {/* <Link className="title" to="/">
//                       {" "}
//                     </Link> */}
//                   </h1>
//                   <p className="lead">
//                     Fill in the form below to create an account.
//                   </p>
//                   <div className="form-group">
//                     <input
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"
//                       type="email"
//                       onChange={this.handleChange}
//                       value={this.state.email}
//                     ></input>
//                   </div>
//                   <div className="form-group">
//                     <input
//                       className="form-control"
//                       placeholder="Password"
//                       name="password"
//                       onChange={this.handleChange}
//                       value={this.state.password}
//                       type="password"
//                     ></input>
//                   </div>
//                   <div className="form-group">
//                     {this.state.error ? (
//                       <p className="text-danger">{this.state.error}</p>
//                     ) : null}
//                     <button className="btn btn-primary rounded-pill ">
//                       Sign up
//                     </button>
//                   </div>
//                   <hr></hr>
//                   <p>
//                     Already have an account? <Link to="/login">Login</Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// src/pages/Login.js
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import "../css/styles.css";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       error: null,
//       email: "",
//       password: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     this.setState({ error: "" });
//     const authentication = getAuth();
//     try {
//       await signInWithEmailAndPassword(
//         authentication,
//         this.state.email,
//         this.state.password
//       );
//     } catch (error) {
//       this.setState({ error: error.message });
//     }
//   }

//   render() {
//     return (
//       <div id="login" data-testid="login-1">
//         <Header></Header>
//         {/* <h3 class="text-center text-white pt-5">Login form</h3> */}
//         <div className="container">
//           <div
//             id="login-row"
//             className="row justify-content-center align-items-center"
//           >
//             <div id="login-column" className="col-md-6">
//               <div id="login-box" className="col-md-12">
//                 <form
//                   id="login-form"
//                   className="form "
//                   autoComplete="off"
//                   onSubmit={this.handleSubmit}
//                 >
//                   <h1>
//                     Login to To Quizzzy
//                     {/* <Link className="title" to="/"> </Link> */}
//                   </h1>
//                   <p className="lead">
//                     Fill in the form below to login to your account.
//                   </p>
//                   <div className="form-group ">
//                     <input
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"
//                       type="email"
//                       onChange={this.handleChange}
//                       value={this.state.email}
//                     ></input>
//                   </div>
//                   <div className="form-group">
//                     <input
//                       className="form-control"
//                       placeholder="Password"
//                       name="password"
//                       onChange={this.handleChange}
//                       value={this.state.password}
//                       type="password"
//                     ></input>
//                   </div>
//                   <div className="form-group">
//                     {this.state.error ? (
//                       <p className="text-danger">{this.state.error}</p>
//                     ) : null}
//                     <button className="btn btn-primary rounded-pill ">
//                       Login
//                     </button>
//                   </div>
//                   <hr></hr>
//                   <p>
//                     Don't have an account? <Link to="/signup">Sign up</Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
