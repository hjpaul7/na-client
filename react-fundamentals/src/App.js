import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import MeetingMain from "./meetings/MeetingMain";
import Sidebar from "./components/site/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import CovidAlert from "./home/CovidAlert";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const updatedUsername = (newUsername) => {
    localStorage.setItem("username", newUsername);
    setUsername(newUsername);
    console.log(newUsername);
  };

  const updatedMessage = (newMessage) => {
    localStorage.setItem("message", newMessage);
    setMessage(newMessage);
    console.log(newMessage);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
    setUsername("");
    setMessage("");
  };

  // function sidebarTernary() {
  //   return localStorage.getItem("token") === null ? "" : <Sidebar />;
  // }

  // if session token is null, then don't display the sidebar: if not null display sidebar

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <MeetingMain token={sessionToken} />
    ) : (
      <Auth
        updateToken={updateToken}
        updatedUsername={updatedUsername}
        updatedMessage={updatedMessage}
      />
    );
  };

  return (
    <div>
      <CovidAlert />
      <Router>
        <Sitebar clickLogout={clearToken} />
        <Sidebar protectedViews={protectedViews} />
      </Router>
    </div>
  );
}

export default App;
