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
import styled from "styled-components";

const Div = styled.div`
  background-color: #363136;
  opacity: 0.8;
  font-size: 14px;
  color: white;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 5px;
  width: 300px;
  margin-left: 125px;
`;

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const logoStyle = {
    fontSize: "3rem",
    paddingBottom: "50px",
    marginTop: "25px",
  };

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
      {/* <img
        src="https://img2.pngio.com/narcotics-anonymous-na-logo-full-size-png-download-seekpng-na-logo-png-615_615.png"
        alt="NA Logo"
        height="200px"
        style={{ float: "center", opacity: "0.8" }}
      /> */}

      <p style={logoStyle}>
        Narcotics
        <font color="coral">
          <b> Anonymous</b>
        </font>
      </p>
      <Div>
        <p>There is hope in recovery. One day at a time.</p>
      </Div>
      <div className="authForm">
        <form>
          <h1>{authTernary()}</h1>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={loginToggle}
            style={{ paddingRight: "105px" }}
          >
            Login/Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
