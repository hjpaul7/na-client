import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const myStyle = {
    textAlign: "center",
  };

  const inputStyle = {
    maxWidth: "200px",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password: password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={myStyle}>
        <h2>
          <font color="#e33e42">Log</font>in
        </h2>
        <FormGroup>
          <Label htmlFor="username">
            <h5>
              <font color="#e33e42">User</font>name
            </h5>
          </Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            style={inputStyle}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            <h5>
              <font color="#e33e42">Pass</font>word
            </h5>
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
            style={inputStyle}
          />
        </FormGroup>
        <button class="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
