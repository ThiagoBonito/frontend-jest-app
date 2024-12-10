import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col border border-gray-300 rounded-lg shadow-lg p-20 bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Home</h1>
        <Link
          href="/todolist"
          className="text-blue-600 hover:underline hover:text-blue-800 text-lg mb-2 text-center"
        >
          To Do List
        </Link>
        <Link
          href="/counter"
          className="text-blue-600 hover:underline hover:text-blue-800 text-lg text-center"
        >
          Counter
        </Link>
      </div>
    </div>
  );
}