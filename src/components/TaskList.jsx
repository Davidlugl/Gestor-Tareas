import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={loadTasks} />
        ))
      )}
    </div>
  );
}

export default TaskList;
