import React, { useState, useRef, useEffect } from "react";
import { Task } from "../App";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void; // додаємо нову пропсу
}

const TaskItem: React.FC<Props> = ({
  task,
  toggleTask,
  deleteTask,
  editTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const finishEditing = () => {
    const trimmed = editText.trim();
    if (trimmed.length === 0) {
      setEditText(task.text); // скасовуємо пусте редагування
    } else {
      editTask(task.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      finishEditing();
    } else if (e.key === "Escape") {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label="Позначити виконаним"
        />
        {isEditing ? (
          <input
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={finishEditing}
            onKeyDown={handleKeyDown}
            aria-label="Редагування задачі"
            className="edit-input"
          />
        ) : (
          <span
            className={task.completed ? "completed" : ""}
            onDoubleClick={() => setIsEditing(true)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsEditing(true);
              }
            }}
            role="textbox"
            aria-readonly="true"
          >
            {task.text}
          </span>
        )}
      </label>
      <button
        onClick={() => deleteTask(task.id)}
        aria-label="Видалити задачу"
        className="delete-button"
      >
        Видалити задачу
      </button>
    </li>
  );
};

export default TaskItem;
