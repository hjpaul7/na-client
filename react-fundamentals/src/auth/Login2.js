import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import APIURL from "../helpers/environment";

import { Form, FormGroup, Label, Input } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

const Login2 = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">
              <h5>
                <font color="coral">User</font>name
              </h5>
            </Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              required
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
              required
              value={password}
              style={inputStyle}
              pattern="(?=.*[a-z]).{5,}"
              title="Password must be at least 5 characters"
            />
          </FormGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};
export default Login2;
