import React, { useEffect } from "react";
import { getTask } from "../../redux/Thunks/getTask";
import { useDispatch, useSelector } from "react-redux";
import "./Tasks.css";
const Tasks = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.task.task);

  const getp = () => {
    dispatch(getTask());
  };

  useEffect(() => {
    getp();
  }, []);
  return (
    <>
      <h3>Completed</h3>
      <table className="all-tasks">
        <thead>
          <tr>
            <th className="a-serial">Sr. No</th>
            <th className="a-title">Title</th>
            <th className="a-description">Description</th>
            <th className="a-status">Status</th>
          </tr>
        </thead>
        <tbody>
          {posts?.tasks?.map((post, index) => (
            <tr key={post?._id}>
              <td>{index + 1}</td>
              <td>{post?.title}</td>
              <td>{post?.description}</td>
              <td>{post?.isCompleted == true ? "completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
