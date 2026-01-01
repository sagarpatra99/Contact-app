import { Link } from "react-router-dom";

export default function Welcome () {
    return <div className="h-screen w-full bg-gray-200 px-6 py-10 flex items-start justify-end flex-col gap-4">
        <h2 className="text-2xl font-semibold">Welcome to Contact App</h2>
        <p className="text-gray-500">Here you can create your account and save contact details as many as you want.</p>
        <Link to="/signup" className="bg-blue-500 w-full py-2 text-center rounded-lg text-white hover:bg-blue-600 transition-all duration-300 font-semibold">Create Account</Link>
        <Link to="/login" className="bg-purple-500 w-full py-2 text-center rounded-lg text-white hover:bg-purple-600 transition-all duration-300 font-semibold">Already Registered? Login</Link>
    </div>
}