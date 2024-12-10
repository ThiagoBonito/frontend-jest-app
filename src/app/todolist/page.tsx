'use client';

import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm border border-gray-200"
          >
            <span className="text-gray-800">{t}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}