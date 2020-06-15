import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  margin-right: 20px;
  padding-bottom: 525px;
  max-width: 50%;
`;

const Emergency = () => {
  return (
    <Div>
      <h3>
        Dude, call <font color="red">911.</font>
      </h3>
    </Div>
  );
};
export default Emergency;
