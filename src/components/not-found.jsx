import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h2 className="text-4xl text-red-600">404 Not Found</h2>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-5">Back to Home</Link>
    </div>
  );
}
