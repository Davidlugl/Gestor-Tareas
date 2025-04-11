import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { getTasks, createTask } from "../services/api";

const TaskPage = () => {
  const { status } = useParams();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then((res) => setTasks(res.data))
      .catch(() => setError("Error al cargar las tareas"));
  }, []);

  const filteredTasks = status
    ? tasks.filter((task) =>
        status === "completed" ? task.completed : !task.completed
      )
    : tasks;

  const handleCreate = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="container">
      <h1>Gestor de Tareas</h1>
      {error && <p className="error">{error}</p>}

      <div className="filters">
        <Link to="/">Todas</Link>
        <Link to="/tasks/completed">Completadas</Link>
        <Link to="/tasks/pending">Pendientes</Link>
      </div>

      <TaskForm onTaskCreated={handleCreate} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskPage;