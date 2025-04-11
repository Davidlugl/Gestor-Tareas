import { Link } from "react-router-dom";
import { deleteTask } from "../api/taskApi";

function TaskItem({ task, onDelete }) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onDelete();
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="actions">
        <Link to={`/edit/${task.id}`}>Editar</Link>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default TaskItem;
