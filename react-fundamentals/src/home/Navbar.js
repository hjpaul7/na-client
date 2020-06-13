// import React, { useState } from "react";
// import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";

// const Sitebar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     let newIsOpen = !isOpen;
//     setIsOpen(newIsOpen);
//   };

//   return (
//     <Navbar color="faded" light expand="md">
//       <NavbarToggler onClick={toggle} />
//       <Collapse isOpen={isOpen} navbar>
//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             <button
//               className="btn btn-primary"
//               type="submit"
//               onClick={props.clickLogout}
//             >
//               Logout
//             </button>
//           </NavItem>
//         </Nav>
//       </Collapse>
//     </Navbar>
//   );
// };

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

  // function welcomeUser() {
  //   return localStorage.getItem("username") === null ? (
  //     <font color="lightgray">
  //       Please Register or Login to view NA Meetings
  //     </font>
  //   ) : (
  //     <h6>
  //       <font color="#ffb347">
  //         <b>Welcome,</b>
  //       </font>{" "}
  //       {localStorage.getItem("username")}
  //     </h6>
  //   );
  // }

  function welcomeMessage() {
    return localStorage.getItem("message") === null ? (
      <p>Please Signup or Login to see Meetings</p>
    ) : localStorage.getItem("message") === "You have succesfully logged in" ? (
      <h6>
        {" "}
        <font color="#ffb347">
          <b>Welcome back,</b>
        </font>{" "}
        {localStorage.getItem("username")}
      </h6>
    ) : localStorage.getItem("message") === "user created" ? (
      <h6>
        {" "}
        <font color="#ffb347">
          <b>Welcome,</b>
        </font>{" "}
        {localStorage.getItem("username")}
      </h6>
    ) : (
      "null"
    );
  }

  // function welcomeBackUser() {
  //   return localStorage.getItem("user created") === "user created"();
  // }

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
