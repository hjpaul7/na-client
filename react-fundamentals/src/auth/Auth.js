// import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Signup from "./Signup";
// import Login from "./Login";

// const Auth = (props) => {
//   return (
//     <Container className="auth-container">
//       <Row>
//         <Col md="2">
//           <Signup updateToken={props.updateToken} />
//         </Col>
//         <Col md="2">
//           <Login updateToken={props.updateToken} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  // const logoStyle = {
  //   fontSize: "3rem",
  //   paddingBottom: "50px",
  //   marginTop: "25px",
  // };

  const authTernary = () => {
    return login ? (
      <Signup
        updateToken={props.updateToken}
        updatedUsername={props.updatedUsername}
        updatedMessage={props.updatedMessage}
      />
    ) : (
      <Login
        updateToken={props.updateToken}
        updatedUsername={props.updatedUsername}
        updatedMessage={props.updatedMessage}
      />
    );
  };

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="logo">
      <img
        src="https://i.imgur.com/m0fiJfe.gif"
        alt="NA Logo"
        height="200px"
        style={{ float: "center", opacity: "0.8" }}
      />

      {/* <p style={logoStyle}>
        <font color="white">N</font>
        <font color="white">arcotics</font>{" "}
        <font color="#e33e42">Anonymous</font>
      </p> */}
      <div className="authForm">
        <form>
          <h1>{authTernary()}</h1>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={loginToggle}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
