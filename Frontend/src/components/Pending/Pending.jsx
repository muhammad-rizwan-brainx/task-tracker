import React from "react";
import "./Pending.css";
const Pending = () => {
  return (
    <>
      <h3>Completed</h3>
      <table className="p-table">
        <thead>
          <tr>
            <th className="p-serial">Sr. No</th>
            <th className="p-title">Title</th>
            <th className="p-description">Description</th>
            <th className="Edit">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1A</td>
            <td>Data 1B</td>
            <td>Data 1C</td>
            <td>Data 1D</td>
          </tr>
          <tr>
            <td>Data 2A</td>
            <td>Data 2B</td>
            <td>Data 2C</td>
            <td>Data 2D</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Pending;
