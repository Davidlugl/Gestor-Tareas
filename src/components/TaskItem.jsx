const TaskItem = ({ task }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      <p>{task.title}</p>
      <span>{task.completed ? '✔️ Completada' : '⏳ Pendiente'}</span>
    </div>
  );
};

export default TaskItem;
