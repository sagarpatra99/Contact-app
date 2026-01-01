import { useNavigate } from "react-router-dom";
import InputField from "./input-field";
import { EllipsisVertical, Plus, Star, X } from "lucide-react";
import { useState } from "react";
import { getLoggedInUser, saveContact } from "../utils/auth";

export default function AddContact() {
  const navigate = useNavigate();
  const loggedUser = getLoggedInUser();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    isFavourite: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim()
    ) {
      alert("All fields are required");
      return;
    }

    saveContact(formData);
    navigate("/contact");
  };

  return (
    <div className="min-h-screen h-full max-w-100 w-100 bg-gray-700 flex flex-col px-5 text-white relative">
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full  py-4 bg-gray-700 z-10">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <X />
        </div>

        <div className="flex items-center gap-6">
          <Star
            className={`cursor-pointer`}
            fill={`${formData.isFavourite ? "white" : "#364153"}`}
            onClick={() => {
              setFormData((prev) => ({ ...prev, isFavourite: !prev.isFavourite }));
            }}
          />
          <button
            type="submit"
            form="add-contact-form"
            className="cursor-pointer py-2 px-5 rounded-full bg-gray-400"
          >
            Save
          </button>
          <EllipsisVertical className="cursor-pointer" />
        </div>
      </nav>

      {/* Content */}
      <div className="pt-14 flex flex-col gap-4">
        <div className="w-full bg-gray-900 p-4 rounded-2xl mb-6">
          <div className="flex justify-between">
            <p>Picture and calling card</p>
            <EllipsisVertical />
          </div>
          <div className="h-40 w-40 mx-auto rounded-full my-4 relative">
            <img
              className="h-full w-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/028/149/251/small_2x/3d-user-profile-icon-png.png"
            />
            <div className="bg-[#101828] rounded-full h-10 w-10 absolute top-5 right-4">
              <Plus
                size={32}
                className="bg-gray-500 rounded-full p-1 absolute top-1 right-1"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          id="add-contact-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <InputField
            legend="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />

          <InputField
            legend="Surname"
            type="text"
            name="lastName"
            placeholder="Surname"
            onChange={handleChange}
          />

          <InputField
            legend="Phone (Mobile)"
            type="text"
            name="phone"
            placeholder="+91 465 465 465"
            onChange={handleChange}
          />
        </form>

        {/* Saving To */}
        <div className="flex items-center justify-center mt-4">
          Saving to
          <p className="bg-blue-500 w-6 h-6 mx-2 text-xs font-semibold flex items-center justify-center rounded-full">
            {loggedUser?.name?.[0].toUpperCase()}
          </p>
          <span>{loggedUser?.email || "Unknown user"}</span>
        </div>
      </div>
    </div>
  );
}
