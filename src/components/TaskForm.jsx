import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, getTask, updateTask } from "../api/taskApi";

function TaskForm() {
  const [task, setTask] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTask(id).then((res) => setTask(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={task.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">{id ? "Actualizar" : "Crear"} Tarea</button>
    </form>
  );
}

export default TaskForm;
