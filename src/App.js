import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

// import React, { Component } from "react";
// import {
//   Route,
//   BrowserRouter as Router,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Quizzzy from "./pages/Quizzzy";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import { getAuth } from "firebase/auth";

// function PrivateRoute({ component: Component, authenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }
// function PublicRoute({ component: Component, authenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authenticated === false ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// }
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       authenticated: false,
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     const auth = getAuth();
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({
//           authenticated: true,
//           loading: false,
//         });
//       } else {
//         this.setState({
//           authenticated: false,
//           loading: false,
//         });
//       }
//     });
//   }
//   render() {
//     return this.state.loading === true ? (
//       <h2>Loading...</h2>
//     ) : (
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home}></Route>
//           <PrivateRoute
//             path="/Quizzzy"
//             authenticated={this.state.authenticated}
//             component={Quizzzy}
//           ></PrivateRoute>
//           <PublicRoute
//             path="/signup"
//             authenticated={this.state.authenticated}
//             component={Signup}
//           ></PublicRoute>
//           <PublicRoute
//             path="/login"
//             authenticated={this.state.authenticated}
//             component={Login}
//           ></PublicRoute>
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;
