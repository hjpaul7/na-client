import React from "react";
import styled from "styled-components";
import "./RehabCenters.css";

const Div = styled.div`
  background-color: #363136;
  opacity: 0.8;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  margin-right: 20px;
  max-width: 100%;
`;

const RehabCenters = () => {
  return (
    <Div>
      <h4>Rehab Centers in Indianapolis</h4>
      <hr />
      <h6>
        <a href="https://centralusa.salvationarmy.org/harborlightindiana/">
          Salvation Army Harbor Lights Center
        </a>
      </h6>
      <li>2400 N. Tibbs Ave</li>
      <li>(317) 972-1450</li>
      <hr />
      <h6>
        <a href="https://www.fairbankscd.org/">
          Fairbanks Addiction Treatment and Recovery Center
        </a>
      </h6>
      <li>8102 Clearvista Parkway</li>
      <li>(317) 849-8222</li>
      <hr />
      <h6>
        <a href="https://www.indianapolis.va.gov/services/Mental_Health_Services.asp">
          Roudebush VA Substance Abuse Treatment Section
        </a>
      </h6>
      <li>1481 W. 10th St</li>
      <li>(317) 554-0000</li>
      <hr />
      <h6>
        <a href="https://www.liferecoverycenterindy.com/">
          Life Recovery Center East
        </a>
      </h6>
      <li>4455 McCoy St</li>
      <li>(317) 887-3290</li>
      <hr />
      <h6>
        <a href="/">Brown Building LLC</a>
      </h6>
      <li>55 S State Ave</li>
      <li>(317) 525-0226</li>
      <hr />
      <h6>
        <a href="https://yourcommunityhospital.com">Community Hospital DBA</a>
      </h6>
      <li>6950 Hillsdale Court</li>
      <li>(317) 621-7600</li>
      <hr />
      <h6>
        <a href="https://www.indianactc.com/location/indianapolis/">
          Indianapolis Treatment Center
        </a>
      </h6>
      <li>2626 E. 46th St</li>
      <li>(855) 509-8002</li>
      <hr />
    </Div>
  );
};
export default RehabCenters;
