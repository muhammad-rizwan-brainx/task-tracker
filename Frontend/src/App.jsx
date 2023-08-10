import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import Completed from "./components/Completed/Completed";
import Pending from "./components/Pending/Pending";
import Profile from "./components/Profile/Profile";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <div className="container">
        <div className="topbar grid-item">
          <div className="logo">
            <img className="logo-tab" src={logo} alt="Task tracker logo" />
            <h3>TaskTacker</h3>
          </div>
          <div className="profile">
            <Profile />
          </div>
        </div>
        <div className="sidebar grid-item">
          <Sidebar />
        </div>
        <div className="content grid-item">
          <Routes>
            <Route index element={<Tasks />} />
            <Route path="completed" element={<Completed />} />
            <Route path="pending" element={<Pending />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
