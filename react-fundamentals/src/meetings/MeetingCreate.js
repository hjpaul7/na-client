import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MeetingCreate = (props) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [openclosed, setOpenClosed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/meeting/", {
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
    <>
      <h4>Add a new meeting</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name" />
          <h6>Name</h6>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="day" />
          <h6>Day</h6>
          <Input
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location" />
          <h6>Location</h6>
          <Input
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time" />
          <h6>Time</h6>
          <Input
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="openclosed" />
          <h6>Open or Closed</h6>
          <Input
            name="openclosed"
            value={openclosed}
            onChange={(e) => setOpenClosed(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};
export default MeetingCreate;
