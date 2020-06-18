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
} from "reactstrap";
import APIURL from "../helpers/environment";

const MeetingCreate = (props) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [openclosed, setOpenClosed] = useState("");

  const [fadeOut, setFadeOut] = useState(false);

  const toggleButton = () => setFadeOut(!fadeOut);

  // const inputStyle = {
  //   maxWidth: "200px",
  // };

  // const Div = styled.div`
  //   background-color: #363136;
  //   opacity: 0.8;
  //   font-size: 14px;
  //   color: white;
  //   padding: 10px;
  //   border-radius: 5px;
  //   // width: 100%;
  //   margin-bottom: 20px;
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  // `;

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
      <p>
        {" "}
        If a new <b>NA</b> meeting has been started in Indianapolis, feel free
        to add it below to help fellow Hoosiers into recovery. Please fill out
        all the fields.
      </p>
      <hr />
      <b>What does Open or Closed mean?</b>
      <li>
        An Open meeting allows non addicts to come to the meetings as well, for
        support or to learn about the program. A Closed meeting is only for
        addicts or recovering addicts
      </li>
      <hr />
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
              <h5 style={{ letterSpacing: "1px" }}>Name</h5>
              <Input
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label htmlFor="location" />
              <h5 style={{ letterSpacing: "1px" }}>Location</h5>
              <Input
                name="location"
                value={location}
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label htmlFor="day" />
              <h5 style={{ letterSpacing: "1px" }}>Day</h5>
              <Input
                name="day"
                value={day}
                required
                onChange={(e) => setDay(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label htmlFor="time" />
              <h5 style={{ letterSpacing: "1px" }}>Time</h5>
              <Input
                name="time"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label htmlFor="openclosed" />
              <h5 style={{ letterSpacing: "1px" }}>Open or Closed</h5>
              <Input
                name="openclosed"
                value={openclosed}
                required
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
