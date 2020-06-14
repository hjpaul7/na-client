import React from "react";

import "./Navbar.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const navbar = (props) => {
  const classes = useStyles();

  // const logoutBtn = () => {
  //     return localStorage.getItem('token') === null ? (
  //         ''
  //     ) : (

  //     );
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Indy Hikes
          </Typography>
          <Button onClick={props.clickLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default navbar;
