import React from "react";
import "./Completed.css";

const Completed = () => {
  return (
    <>
      <h3>Completed</h3>
      <table className="completed">
        <thead>
          <tr>
            <th className="col-1">Sr. No</th>
            <th className="col-2">Title</th>
            <th className="col-3">Description</th>
            <th className="col-4">Status</th>
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

export default Completed;
