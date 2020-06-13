import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import MeetingMain from "../../meetings/MeetingMain";
import Home from "../site/Home";
import Test from "../concepts/Test";

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
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* {viewMeetingRouter()} */}
          <hr />

          <li>
            <Link to="/test">Addiction Info</Link>
          </li>
          <hr />
          <li>
            <Link to="/test">Resources</Link>
          </li>
          <hr />
          <li>
            <Link to="/test">Emergency</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            {props.protectedViews()}
            {/* <MeetingMain /> */}
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
