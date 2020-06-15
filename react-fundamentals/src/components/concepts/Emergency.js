import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #363136;
  opacity: 0.8;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  margin-right: 20px;
  margin-top: 100px;
  margin-bottom: 410px;
  max-width: 40%;
`;

const Emergency = () => {
  return (
    <Div>
      <h3>
        Dude, what're you doing? Call{" "}
        <font color="coral">
          <b>911.</b>
        </font>
      </h3>
      <hr />
      <h6>
        <li>
          If you're experiencing an elevated heart rate, losing sensation to
          your fingers or face, believe you feel a seizure coming on, or even
          worse Cardiac Arrest then you need to call 911. Don't assume you'll
          get through it.{" "}
          <font color="coral">
            <b>
              I've been there, you won't. You need medical attention. Call.
              Right. Now.
            </b>
          </font>
        </li>
      </h6>
    </Div>
  );
};
export default Emergency;
