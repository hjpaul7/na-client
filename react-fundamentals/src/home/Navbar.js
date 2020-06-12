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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.color}>
          <Typography variant="p" id="navTitle" className={classes.title}>
            Welcome "Username"
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            type="submit"
            onClick={props.clickLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Sitebar;
