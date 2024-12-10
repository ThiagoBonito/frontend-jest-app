'use client';

import { useState } from "react";

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter</h1>
      <p className="text-4xl font-semibold text-blue-600 mb-6">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Increase
        </button>
      </div>
    </div>
  );
}