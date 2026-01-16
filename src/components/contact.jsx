import { LogOut, Plus, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser } from "../utils/auth";

export default function Contact() {
  const navigate = useNavigate();

  const loggedUser = getLoggedInUser();
  const contacts = loggedUser.contacts || [];

  if (!loggedUser) {
    navigate("/login");
    return;
  }

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div className="min-h-screen w-100 bg-gray-700 relative flex items-start flex-col p-6 space-y-4 text-white">
      <div className="w-full flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold">
          <Users size={20} /> All Contacts
        </h2>
        <Link
          onClick={handleLogout}
          className="text-red-500 py-2 px-3 text-sm flex gap-2"
        >
          <LogOut size={20} />
        </Link>
      </div>
      <div className="w-full space-y-1">
        {contacts.length > 0 ? (
          contacts.map((contact, idx) => {
            return (
              <Link
                key={idx}
                to={`/contact/${idx}`}
                className="bg-gray-500 w-full flex items-center gap-3 p-3 rounded-md"
              >
                <div className="py-2 px-4 font-semibold bg-amber-700 rounded-full">
                  {contact.firstName[0]}
                </div>
                <p className="font-semibold">{`${contact.firstName} ${contact.lastName}`}</p>
              </Link>
            );
          })
        ) : (
          <div className="text-center pt-70 text-2xl text-amber-900">
            No contacts yet !
          </div>
        )}
      </div>
      <Link
        to="/add-contact"
        // className="fixed bottom-10 right-5 bg-blue-500 py-2 px-3 rounded-lg"
        className="absolute bottom-6 right-6 z-50 bg-blue-500 p-4 rounded-full shadow-xl"
      >
        <Plus />
      </Link>
    </div>
  );
}
