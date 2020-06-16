// import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Signup from "./Signup";
// import Login from "./Login";

// const Auth = (props) => {
//   return (
//     <Container className="auth-container">
//       <Row>
//         <Col md="2">
//           <Signup updateToken={props.updateToken} />
//         </Col>
//         <Col md="2">
//           <Login updateToken={props.updateToken} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import Signup2 from "./Signup2";
import Login2 from "./Login2";
import "./Auth.css";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Div = styled.div`
  background-color: #363136;
  opacity: 0.8;
  font-size: 14px;
  color: white;
  border-radius: 5px;
  padding-right: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 5px;
  width: 310px;
  margin-left: 125px;
`;

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  // const classes = useStyles();

  // const logoStyle = {
  //   fontSize: "3rem",
  //   paddingBottom: "50px",
  //   marginTop: "25px",
  // };

  const authTernary = () => {
    return login ? (
      <Signup2
        updateToken={props.updateToken}
        updatedUsername={props.updatedUsername}
        updatedMessage={props.updatedMessage}
      />
    ) : (
      <Login2
        updateToken={props.updateToken}
        updatedUsername={props.updatedUsername}
        updatedMessage={props.updatedMessage}
      />
    );
  };

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="logo">
        <p>
          Narcotics
          <font color="coral">
            <b> Anonymous</b>
          </font>
        </p>
      </div>
      <Div>
        <p>There is hope in recovery. One day at a time.</p>
      </Div>
      <div className="authForm">
        <form>
          {authTernary()}
          {/* <button
            className="btn btn-primary"
            type="submit"
            onClick={loginToggle}
            style={{ paddingRight: "105px" }}
          >
            Login/Signup
          </button> */}
          <Button
            type="submit"
            style={{ minWidth: "170px", marginTop: "-60px" }}
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={loginToggle}
          >
            Login or Signup
          </Button>
        </form>
      </div>
    </>
  );
};

export default Auth;
