import React from "react";
import styled from "styled-components";
import "./RehabCenters.css";

const Div = styled.div`
  background-color: #363136;
  opacity: 0.8;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-right: 5px;
  margin-right: 20px;
  max-width: 100%;
`;

const Resources = () => {
  return (
    <Div>
      <h4>Resources</h4>
      <hr />
      <h6>
        <a href="https://na.org">Narcotics Anonymous</a>
      </h6>
      <li>
        Official NA site. You can access free online literature, find meetings
        and local events.
      </li>
      <hr />
      <h6>
        <a
          href="https://www.samhsa.gov/find-help/national-helpline"
          style={{ textDecoration: "none", color: "#lightblue" }}
        >
          SAMHSA
        </a>
      </h6>
      <li>Substance Abuse and Mental Health Services Administration</li>
      <hr />
      <h6>
        <a
          href="https://www.drugabuse.gov/publications/principles-drug-addiction-treatment-research-based-guide-third-edition/resources"
          style={{ textDecoration: "none", color: "#lightblue" }}
        >
          Drug Abuse.gov
        </a>
      </h6>
      <li>National Institute on Drug Abuse</li>
      <hr />
      <h6>
        <a href="https://www.addictioncenter.com/">Addiction Center</a>
      </h6>
      <li>Find Rehabs, resources, drug information and treatments.</li>
      <hr />
      <h6>
        <a href="https://www.publichealth.org/resources/addiction/">
          Public Health
        </a>
      </h6>
      <li>
        Free online resources will give you the perspective you need to lead the
        fight against addiction.
      </li>
      <hr />
      <h6>
        <a href="https://www.in.gov/recovery/know-the-facts/?utm_source=google&utm_medium=cpc&utm_campaign=brand">
          IN.gov Know
        </a>
      </h6>
      <li>
        Know the facts Indiana. Giving insight on stigma, training, resources,
        prevention and treatment.
      </li>
    </Div>
  );
};
export default Resources;
