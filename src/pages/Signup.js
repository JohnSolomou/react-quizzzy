import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { Signup } = useAuth;
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await Signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordConfirmRef}
              ></Form.Control>
            </Form.Group>
            <Button disabled={Loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
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
