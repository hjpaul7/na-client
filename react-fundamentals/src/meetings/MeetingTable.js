import React from "react";
import { Button, Table } from "reactstrap";

const MeetingTable = (props) => {
  const deleteMeeting = (meeting) => {
    fetch(`http://localhost:4000/meeting/${meeting.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchMeetings());
  };

  const meetingMapper = () => {
    return props.meetings.map((meeting, main) => {
      // main might be INDEX
      return (
        <tr key={main}>
          <th scope="row">{meeting.id}</th>
          <td>{meeting.name}</td>
          <td>{meeting.day}</td>
          <td>{meeting.location}</td>
          <td>{meeting.time}</td>
          <td>{meeting.openclosed}</td>
          <td>
            <Button
              color="primary"
              onClick={() => {
                props.editUpdateMeeting(meeting);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="primary"
              onClick={() => {
                deleteMeeting(meeting);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h3>Current Indianapolis NA Meetings</h3>
      <hr />

      <Table hover dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Day</th>
            <th>Location</th>
            <th>Time</th>
            <th>Open or Closed</th>
          </tr>
        </thead>
        <tbody>{meetingMapper()}</tbody>
      </Table>
    </>
  );
};

export default MeetingTable;
