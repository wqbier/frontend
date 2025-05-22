import React, { useState } from "react";

interface Props {
  addTask: (text: string) => void;
}

const TaskForm: React.FC<Props> = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Нова задача..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Поле для нової задачі"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default TaskForm;
