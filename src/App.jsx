import { Outlet } from "react-router-dom";

export default function App () {
  return <div className="max-w-100 min-h-screen bg-red-200d mx-auto">
    <Outlet />
  </div>
}