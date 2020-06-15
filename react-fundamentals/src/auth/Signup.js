import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from "../helpers/environment";

const Signup = (props) => {
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
    fetch(`${APIURL}/user/register`, {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
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
      <Form className="signup" onSubmit={handleSubmit} style={myStyle}>
        <h2>
          <font color="coral">Sign</font>up
        </h2>
        <FormGroup>
          <Label htmlFor="username">
            <h5>
              <font color="coral">User</font>name
            </h5>
          </Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            value={username}
            style={inputStyle}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
            title="Must have at least one number, uppercase, and a lowercase letter. Min 4 chars."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            <h5>
              <font color="coral">Pass</font>word
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
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </Form>
    </div>
  );
};

export default Signup;
