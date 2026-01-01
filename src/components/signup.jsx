import { useState } from "react";
import InputField from "./input-field";
import { saveUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contacts: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      saveUser(formData);
      alert("Account Created Successfully");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="h-screen w-full bg-gray-200 px-6 py-8 flex items-start justify-start flex-col gap-4">
      <h2 className="text-2xl font-semibold">Create your Account</h2>
      <p>All fields are required.</p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <InputField
          name="name"
          type="text"
          legend="Full Name"
          placeholder="Enter your full name"
          onChange={handleChange}
        />
        <InputField
          name="email"
          type="email"
          legend={"Email Address"}
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        <InputField
          name="password"
          type="password"
          legend={"Password"}
          eyeIcon={true}
          placeholder="Hide password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 w-full py-2 text-center rounded-lg text-white hover:bg-blue-600 transition-all duration-300 font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
