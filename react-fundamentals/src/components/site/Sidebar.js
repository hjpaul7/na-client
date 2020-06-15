import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../site/Home";
import AddictiveDrugs from "../concepts/AddictiveDrugs";
import MeetingCreate from "../../meetings/MeetingCreate";
import Resources from "../concepts/Resources";
import RehabCenters from "../concepts/RehabCenters";
import Emergency from "../concepts/Emergency";

const Sidebar = (props) => {
  // function viewMeetingRouter() {
  //   return localStorage.getItem("token") === null ? (
  //     ""
  //   ) : (
  //     <li>
  //       <Link to="/">View Meetings</Link>
  //     </li>
  //   );
  // }

  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <img
          src="https://img2.pngio.com/narcotics-anonymous-na-logo-full-size-png-download-seekpng-na-logo-png-615_615.png"
          height="125px"
          alt="na-logo-sidebar"
          style={{ opacity: "0.7" }}
        />
        <hr />
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* {viewMeetingRouter()} */}
          <hr />
          {/* <li>
            <Link to="/meeting">Create Meetings</Link>
          </li>
          <hr /> */}
          <li>
            <Link to="/addictivedrugs">Addictive Drugs</Link>
          </li>
          <hr />
          <li>
            <Link to="/rehabcenters">Rehab Centers</Link>
          </li>
          <hr />
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <hr />
          <li>
            <Link to="/emergency">
              <font color="e33e42">Emergency</font>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
          {/* <Route exact path="/meeting">
            <MeetingCreate />
          </Route> */}

          <Route exact path="/">
            {props.protectedViews()}
            {/* <MeetingMain /> */}
          </Route>
          <Route exact path="/addictivedrugs">
            <AddictiveDrugs />
          </Route>
          <Route exact path="/rehabcenters">
            <RehabCenters />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/emergency">
            <Emergency />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
