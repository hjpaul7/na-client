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
import { Button, Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const logoStyle = {
    fontSize: "4rem",
  };

  const authTernary = () => {
    return login ? (
      <Signup updateToken={props.updateToken} />
    ) : (
      <Login updateToken={props.updateToken} />
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
      <p style={logoStyle}>
        <font color="#e33e42">N</font>arcotics <font color="#e33e42">A</font>
        nonymous
      </p>
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
