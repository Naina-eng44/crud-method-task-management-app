import { useState } from "react";
import API from "../services/api";

const TaskList = ({ tasks, fetchTasks }) => {
  const [filter, setFilter] = useState("All");

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    await API.put(`/${task._id}`, {
      ...task,
      status: task.status === "Pending" ? "Completed" : "Pending"
    });
    fetchTasks();
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(t => t.status === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-3 text-center">
        <button
          className="btn btn-outline-light me-2"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="btn btn-outline-warning me-2"
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>

        <button
          className="btn btn-outline-success"
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>

      {/* Task Cards */}
      {filteredTasks.map(task => (
        <div key={task._id} className="card p-4 mb-3 shadow-lg">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{task.title}</h5>

            <span
              className={`badge ${
                task.status === "Pending"
                  ? "bg-warning text-dark"
                  : "bg-success"
              }`}
            >
              {task.status}
            </span>
          </div>

          <p className="mt-2">{task.description}</p>

          <small className="text-muted">
            {new Date(task.createdAt).toLocaleString()}
          </small>

          <div className="mt-3 d-flex justify-content-between">
            <button
              className="btn btn-sm btn-success"
              onClick={() => toggleStatus(task)}
            >
               Toggle
            </button>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTask(task._id)}
            >
               Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;