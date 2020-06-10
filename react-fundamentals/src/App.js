import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sitebar from "./home/Navbar";
import Header from "./components/site/Header";
import Sidebar from "./components/site/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./auth/Auth";
import MeetingMain from "./meetings/MeetingMain";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <MeetingMain token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <Header />
      <Router>
        <Sidebar updateToken={updateToken} />
      </Router>
    </div>
  );
  // return (
  //   <div>
  //     <Sidebar clickLogout={clearToken} />
  //     {/* <Auth updateToken={updateToken} /> */}
  //     {protectedViews()}
  //   </div>
  // );
}

export default App;
