import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Fade,
  Badge,
} from "reactstrap";
import APIURL from "../helpers/environment";
import styled from "styled-components";

const MeetingCreate = (props) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [openclosed, setOpenClosed] = useState("");

  const [fadeOut, setFadeOut] = useState(false);

  const toggleButton = () => setFadeOut(!fadeOut);

  const inputStyle = {
    maxWidth: "200px",
  };

  const Div = styled.div`
    background-color: white;
    color: black;
    padding: 10px;
    border-radius: 5px;
    // width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/meeting/`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        day: day,
        location: location,
        time: time,
        openclosed: openclosed,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setName("");
        setDay("");
        setLocation("");
        setTime("");
        setOpenClosed("");
        props.fetchMeetings();
      });
  };

  return (
    <Container>
      <Div>
        If a new NA meeting has been started in Indianapolis, please feel free
        to create a new meeting below to help fellow Hoosiers into recovery, or
        find a meeting closer to them! Please include the meeting Name,
        Location, Day, Time and if the meeting is Open or Closed.
        {/* <hr /> */}
      </Div>
      <Div>
        <b>What does Open or closed mean?</b>
        <li>
          An Open meeting allows non addicts to come to the meetings as well,
          for support or to learn about the program. A Closed meeting is only
          for addicts or recoverying addicts
        </li>
      </Div>
      <h2
        style={{
          textAlign: "center",
          letterSpacing: "1px",
          marginTop: "5px",
        }}
      >
        Add Meeting
      </h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label htmlFor="name" />
              <h5 style={{ letterSpacing: "1px" }}>
                <font color="#e33e42">N</font>ame
              </h5>
              <Input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label htmlFor="location" />
              <h5 style={{ letterSpacing: "1px" }}>
                <font color="#e33e42">L</font>ocation
              </h5>
              <Input
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label htmlFor="day" />
              <h5 style={{ letterSpacing: "1px" }}>
                <font color="#e33e42">D</font>ay
              </h5>
              <Input
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label htmlFor="time" />
              <h5 style={{ letterSpacing: "1px" }}>
                <font color="#e33e42">T</font>ime
              </h5>
              <Input
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label htmlFor="openclosed" />
              <h5 style={{ letterSpacing: "1px" }}>
                <font color="#e33e42">O</font>pen or{" "}
                <font color="#e33e42">C</font>
                losed
              </h5>
              <Input
                name="openclosed"
                value={openclosed}
                onChange={(e) => setOpenClosed(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="light" type="submit" onClick={toggleButton}>
          Submit
        </Button>
        <Fade in={fadeOut} tag="h5" className="mt-3">
          Your meeting has been added!
        </Fade>
      </Form>
    </Container>
  );
};
export default MeetingCreate;
