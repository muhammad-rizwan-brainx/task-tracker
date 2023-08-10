import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink className="task-list" to="/">
        All Tasks
      </NavLink>
      <NavLink className="completed" to="/completed">
        Completed
      </NavLink>
      <NavLink className="pending" to="/pending">
        Pending
      </NavLink>
    </div>
  );
};

export default Sidebar;
