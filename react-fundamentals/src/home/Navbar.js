import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#1f2833",
  },
});

const Sitebar = (props) => {
  const classes = useStyles();

  function logoutBtn() {
    return localStorage.getItem("token") === null ? (
      ""
    ) : (
      <Button onClick={props.clickLogout} color="inherit" id="navLog">
        Logout
      </Button>
    );
  }

  function welcomeMessage() {
    return localStorage.getItem("message") === null ? (
      <font color="white">
        <p>Please Signup or Login to see Meetings</p>
      </font>
    ) : localStorage.getItem("message") === "You have succesfully logged in" ? (
      <h6>
        {" "}
        <font color="#ffb347">
          <b>Welcome back,</b>
        </font>{" "}
        <font color="white">{localStorage.getItem("username")}</font>
      </h6>
    ) : localStorage.getItem("message") === "user created" ? (
      <h6>
        {" "}
        <font color="#ffb347">
          <b>Welcome,</b>
        </font>{" "}
        <font color="white">{localStorage.getItem("username")}</font>
      </h6>
    ) : (
      "null"
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ opacity: "0.9" }}>
        <Toolbar className={classes.color}>
          <Typography variant="p" id="navTitle" className={classes.title}>
            {welcomeMessage()}
          </Typography>
          {/* <Button
            color="primary"
            variant="outlined"
            type="submit"
            onClick={props.clickLogout}
          >
            Logout
          </Button> */}
          {logoutBtn()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Sitebar;
