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
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";
import { Badge } from "reactstrap";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const logoStyle = {
    fontSize: "3rem",
    paddingBottom: "140px",
    marginTop: "125px",
  };

  const authTernary = () => {
    return login ? (
      <Signup updateToken={props.updateToken} />
    ) : (
      <Login updateToken={props.updateToken} />
    );
  };

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="logo">
      <img
        src="https://lh3.googleusercontent.com/proxy/56K3VH-0mUnw9jhT5IvYq3YVm_INU3ffRFvPLNARf2FFNO4n4BVNXLHBXJH_NCFfMB76CSl_aF3pgHGxcF1zFlzE"
        alt="NA Logo"
        height="200px"
        style={{ float: "left", paddingRight: "40px", opacity: "0.8" }}
      />

      <p style={logoStyle}>
        <font color="#e33e42">N</font>arcotics <font color="#e33e42">A</font>
        nonymous
      </p>
      <div className="authForm">
        <form>
          <h1>{authTernary()}</h1>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={loginToggle}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
