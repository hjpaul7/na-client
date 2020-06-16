import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MeetingTable from "./MeetingTable";
import MeetingCreate from "./MeetingCreate";
import MeetingEdit from "./MeetingEdit";
import APIURL from "../helpers/environment";
import styled from "styled-components";

const MeetingMain = (props) => {
  const Div = styled.div`
    background-color: #363136;
    opacity: 0.8;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 10px;
  `;

  const [meetings, setMeetings] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [meetingToUpdate, setMeetingToUpdate] = useState({});

  const tableStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1175px",
  };

  const fetchMeetings = () => {
    fetch(`${APIURL}/meeting`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setMeetings(logData.meetings);
        console.log(logData.meetings);
      });
  };

  const editUpdateMeeting = (meeting) => {
    setMeetingToUpdate(meeting);
    console.log(meeting);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  return (
    <Div>
      <Container style={tableStyle}>
        <Row>
          <Col md="12">
            <MeetingCreate fetchMeetings={fetchMeetings} token={props.token} />
          </Col>
          <Col md="12">
            <MeetingTable
              meetings={meetings}
              editUpdateMeeting={editUpdateMeeting}
              updateOn={updateOn}
              fetchMeetings={fetchMeetings}
              token={props.token}
            />
          </Col>
          {updateActive ? (
            <MeetingEdit
              meetingToUpdate={meetingToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchMeetings={fetchMeetings}
            />
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </Div>
  );
};

export default MeetingMain;
