import React from "react";
import { Button, Table } from "reactstrap";
import APIURL from "../helpers/environment";
import "./MeetingTable.css";

const MeetingTable = (props) => {
  const deleteMeeting = (meeting) => {
    fetch(`${APIURL}/meeting/${meeting.id}`, {
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
          <td>{meeting.name}</td>
          <td>{meeting.day}</td>
          <td>{meeting.location}</td>
          <td>{meeting.time}</td>
          <td>{meeting.openclosed}</td>
          <td>
            <Button
              type="button"
              color="success"
              onClick={() => {
                props.editUpdateMeeting(meeting);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              type="button"
              color="danger"
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>
        Current <font color="#e33e42">Indiana</font>polis{" "}
        <font color="#e33e42">N</font>A Meetings
      </h3>
      <hr />
      <Table
        hover
        dark
        style={{
          borderRadius: "10px",
          height: "500px",
          overflow: "scroll",
          display: "block",
          overflowX: "hidden",
          height: "600px",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Day</th>
            <th>Location</th>
            <th>Time</th>
            <th>Open or Closed</th>
            <th>Update or Delete</th>
          </tr>
        </thead>
        <tbody>{meetingMapper()}</tbody>
      </Table>
    </>
  );
};

export default MeetingTable;
