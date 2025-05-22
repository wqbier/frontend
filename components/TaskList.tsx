import React from "react";
import { Task } from "../App";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TaskList: React.FC<Props> = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}) => {
  if (tasks.length === 0) return <p>Задач поки що немає 🙂</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
