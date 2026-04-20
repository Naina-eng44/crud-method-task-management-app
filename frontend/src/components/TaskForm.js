import { useState } from "react";
import API from "../services/api";

const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.title || !task.description) {
      setError("All fields are required!");
      return;
    }

    await API.post("/", task);

    setTask({ title: "", description: "" });
    setError("");
    fetchTasks();
  };

  return (
    <div className="card p-4 mb-4 shadow-lg">
      <h4 className="mb-3 text-center"> Add New Task</h4>

      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Enter Title..."
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Enter Description..."
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }
        />

        <button className="btn btn-primary w-100">
           Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;