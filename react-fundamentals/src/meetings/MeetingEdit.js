import React, { useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import APIURL from "../helpers/environment";

const MeetingEdit = (props) => {
  const [editName, setEditName] = useState(props.meetingToUpdate.name);
  const [editDay, setEditDay] = useState(props.meetingToUpdate.day);
  const [editLocation, setEditLocation] = useState(
    props.meetingToUpdate.location
  );
  const [editTime, setEditTime] = useState(props.meetingToUpdate.time);
  const [editOpenClosed, setEditOpenClosed] = useState(
    props.meetingToUpdate.openclosed
  );

  const updateStyle = {
    color: "black",
  };

  const meetingUpdate = (event, meeting) => {
    console.log(props);
    event.preventDefault();
    fetch(`${APIURL}/meeting/${props.meetingToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: editName,
        day: editDay,
        location: editLocation,
        time: editTime,
        openclosed: editOpenClosed,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchMeetings();
      props.updateOff();
    });
  };

  return (
    <>
      <Modal isOpen={true} style={updateStyle}>
        <ModalHeader>Log a Meeting</ModalHeader>
        <ModalBody>
          <Form onSubmit={meetingUpdate}>
            <FormGroup>
              <Label htmlFor="name">Edit Name:</Label>
              <Input
                name="name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="day">Edit Day:</Label>
              <Input
                name="day"
                value={editDay}
                onChange={(e) => setEditDay(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="location">Edit Location:</Label>
              <Input
                name="location"
                value={editLocation}
                onChange={(e) => setEditLocation(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="time">Edit Time:</Label>
              <Input
                name="time"
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="openclosed">Is the meeting Open or Closed?</Label>
              <Input
                name="openclosed"
                value={editOpenClosed}
                onChange={(e) => setEditOpenClosed(e.target.value)}
              ></Input>
            </FormGroup>

            <Button type="submit">Edit the meeting</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default MeetingEdit;
