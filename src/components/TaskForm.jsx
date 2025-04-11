import React, { useState } from "react";
import { createTask } from "../services/api";
import "../styles/TaskForm.scss";

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      completed,
      userId: 1,
    };

    try {
      const response = await createTask(newTask);
      onTaskCreated({ ...newTask, id: response.data.id });
      setTitle("");
      setCompleted(false);
    } catch (error) {
      alert("Error al crear la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la tarea"
      />
      <select
        value={completed}
        onChange={(e) => setCompleted(e.target.value === "true")}
      >
        <option value="false">Pendiente</option>
        <option value="true">Completada</option>
      </select>
      <button type="submit">Crear</button>
    </form>
  );
};

export default TaskForm;