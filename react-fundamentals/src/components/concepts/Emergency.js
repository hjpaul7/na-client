import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #363136;
  opacity: 0.8;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
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
    </Div>
  );
};
export default Emergency;
