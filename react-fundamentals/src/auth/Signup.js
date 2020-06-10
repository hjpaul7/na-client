import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify({ username, password: password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
        props.updateToken(data.sessionToken);
      })
    );
  };

  return (
    <div>
      <h2>Signup</h2>
      <Form className="signup" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
          />
        </FormGroup>
        <button class="btn btn-primary" type="submit">
          Signup
        </button>
      </Form>
    </div>
  );
};

export default Signup;
