import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  return (
    <Container className="auth-container">
      <Row>
        <Col md="2">
          <Signup updateToken={props.updateToken} />
        </Col>
        <Col md="2">
          <Login updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
