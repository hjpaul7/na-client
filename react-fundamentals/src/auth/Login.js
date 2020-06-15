import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";

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
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({ username, password: password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        console.log(data);
        props.updatedUsername(data.user.username);
        props.updatedMessage(data.message);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={myStyle}>
        <h2>
          <font color="lightcoral">Log</font>in
        </h2>
        <FormGroup>
          <Label htmlFor="username">
            <h5>
              <font color="lightcoral">User</font>name
            </h5>
          </Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            value={username}
            style={inputStyle}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
            title="Must have at least one number, uppercase, and a lowercase letter. Min 4 chars."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            <h5>
              <font color="lightcoral">Pass</font>word
            </h5>
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
            style={inputStyle}
            pattern="{5,}"
            title="Password must be at least 5 characters"
          />
        </FormGroup>
        <Button color="btn btn-primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
