import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// import Home from "./Home";
import AddMeeting from "../Extra/AddMeeting";
import Meeting from "../../meetings/MeetingMain";
// import Auth from "../../auth/Auth";
import Login from "../../auth/Login";
import Signup from "../../auth/Signup";
import Emergency from "../Extra/Emergency";
import Resources from "../Extra/Resources";
import AddictionInfo from "../Extra/AddictionInfo";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/meeting">Meetings</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/emergency">Emergency</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/addictioninfo">Addiction Info</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/meeting">
            <Meeting />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login updateToken={props.updateToken} />
          </Route>
          <Route exact path="/emergency">
            <Emergency />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/addictioninfo">
            <AddictionInfo />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
