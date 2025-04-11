import React from "react";
import "../styles/TaskList.scss";

const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : "pending"}>
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
