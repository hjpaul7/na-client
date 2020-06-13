import React from "react";
import { Button } from "reactstrap";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import APIURL from "../helpers/environment";
import "./MeetingTable.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const MeetingTable = (props) => {
  const classes = useStyles();

  const deleteMeeting = (meeting) => {
    fetch(`${APIURL}/meeting/${meeting.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchMeetings());
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        borderRadius: "10px",
        overflow: "scroll",
        display: "block",
        overflowX: "hidden",
        height: "600px",
        marginBottom: "20px",
      }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              <b>Meeting Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Day</b>
            </TableCell>
            <TableCell align="right">
              <b>Location</b>
            </TableCell>
            <TableCell align="right">
              <b>Time</b>
            </TableCell>
            <TableCell align="right">
              <b>Open or Closed</b>
            </TableCell>
            <TableCell align="right">
              <b>Update or Delete</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.meetings.map((meeting, main) => (
            <TableRow key={main}>
              {/* <TableCell component="th" scope="row">
                {meeting.name}
              </TableCell> */}
              <TableCell component="th" scope="row">
                {meeting.name}
              </TableCell>
              <TableCell align="right">{meeting.day}</TableCell>
              <TableCell align="right">{meeting.location}</TableCell>
              <TableCell align="right">{meeting.time}</TableCell>
              <TableCell align="center">{meeting.openclosed}</TableCell>
              <TableCell align="right">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MeetingTable;

// import React from "react";
// import { Button, Table } from "reactstrap";
// import APIURL from "../helpers/environment";
// import "./MeetingTable.css";

// const MeetingTable = (props) => {
//   const deleteMeeting = (meeting) => {
//     fetch(`${APIURL}/meeting/${meeting.id}`, {
//       method: "DELETE",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     }).then(() => props.fetchMeetings());
//   };

//   const meetingMapper = () => {
//     return props.meetings.map((meeting, main) => {
//       // main might be INDEX
//       return (
//         <tr key={main}>
//           <td>{meeting.name}</td>
//           <td>{meeting.day}</td>
//           <td>{meeting.location}</td>
//           <td>{meeting.time}</td>
//           <td>{meeting.openclosed}</td>
//           <td>
//             <Button
//               type="button"
//               color="success"
//               onClick={() => {
//                 props.editUpdateMeeting(meeting);
//                 props.updateOn();
//               }}
//             >
//               Update
//             </Button>
//             <Button
//               style={{ marginLeft: "5px" }}
//               type="button"
//               color="danger"
//               onClick={() => {
//                 deleteMeeting(meeting);
//               }}
//             >
//               Delete
//             </Button>
//           </td>
//         </tr>
//       );
//     });
//   };

//   return (
//     <>
//       <h3
//         style={{ textAlign: "center", marginTop: "40px", letterSpacing: "1px" }}
//       >
//         Current <font color="#e33e42">Indiana</font>polis{" "}
//         <font color="#e33e42">N</font>A Meetings
//       </h3>
//       <br />
//       <Table
//         hover
//         dark
//         style={{
//           borderRadius: "10px",
//           overflow: "scroll",
//           display: "block",
//           overflowX: "hidden",
//           height: "600px",
//         }}
//       >
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Day</th>
//             <th>Location</th>
//             <th>Time</th>
//             <th>Open or Closed</th>
//             <th>Update or Delete</th>
//           </tr>
//         </thead>
//         <tbody>{meetingMapper()}</tbody>
//       </Table>
//     </>
//   );
// };

// export default MeetingTable;
