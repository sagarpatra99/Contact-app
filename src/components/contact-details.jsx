import {
  ArrowLeft,
  CircleOff,
  Mail,
  MessageCircle,
  Pencil,
  Phone,
  Share2,
  Star,
  Trash2,
  UserRoundCog,
  Video,
  Voicemail,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteContact, getLoggedInUser } from "../utils/auth";

export default function ContactDetails() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const loggedUser = getLoggedInUser();
  const contact = loggedUser?.contacts?.[contactId];

  if (!loggedUser || !contact) {
    navigate("/contact");
    return null;
  }

  const handleDelete = () => {
    deleteContact(Number(contactId));
    navigate("/contact");
  };

  return (
    <div className="h-ful l max-w-100 w-100 bg-gray-700 flex items-center justify-center overflow-hidden flex-col space-y-4 text-white relative">
      <nav className="flex items-center justify-between w-100 fixed top-0 py-4 px-5 bg-gray-700">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer"
        >
          <ArrowLeft />
        </div>
        <div className="flex items-center gap-6">
          <Star
            fill={`${contact.isFavourite === true ? "white" : "#364153"}`}
          />
          <Pencil />
          <UserRoundCog />
        </div>
      </nav>
      <div className="bg-amber-300s w-full pt-20 px-6 pb-6">
        <div>
          <div className="h-44 w-44 font-semibold bg-amber-700 rounded-full text-8xl mx-auto flex items-center justify-center">
            {contact.firstName[0]}
          </div>
          <p className="font-semibold text-center pt-5 text-4xl">
            {contact.firstName} {contact.lastName}
          </p>
          <div className="flex items-center gap-4 my-4">
            <div className="flex items-center flex-col w-fit gap-2">
              <div className="bg-gray-500 w-18 h-12 flex items-center justify-center rounded-full">
                <Phone fill="white" />
              </div>
              <span>Call</span>
            </div>
            <div className="flex items-center flex-col w-fit gap-2">
              <div className="bg-gray-500 w-18 h-12 flex items-center justify-center rounded-full">
                <MessageCircle fill="white" />
              </div>
              <span>Message</span>
            </div>
            <div className="flex items-center flex-col w-fit gap-2">
              <div className="bg-gray-500 w-18 h-12 flex items-center justify-center rounded-full">
                <Video fill="white" />
              </div>
              <span>Video</span>
            </div>
            <div className="flex items-center flex-col w-fit gap-2">
              <div className="bg-gray-500 w-18 h-12 flex items-center justify-center rounded-full">
                <Mail className="custom-mail-icon" />
              </div>
              <span>Email</span>
            </div>
          </div>
          <div className="bg-gray-500 px-4 py-2 mb-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Phone />
              <div>
                <div>{contact.phone}</div>
                <p>Mobile</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Video />
              <MessageCircle />
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="bg-gray-800 flex items-center gap-4 py-3 px-4 rounded-xl">
              <Share2 />
              <p>Share Contact</p>
            </div>
            <div className="bg-gray-800 flex items-center gap-4 py-3 px-4 rounded-xl">
              <Voicemail />
              <p>Send to voicemail</p>
            </div>
            <div className="bg-gray-800 text-red-300 flex items-center gap-4 py-3 px-4 rounded-xl">
              <CircleOff />
              <p>Block number</p>
            </div>
            <div
              onClick={handleDelete}
              className="bg-gray-800 text-red-400 flex items-center gap-4 py-3 px-4 rounded-xl cursor-pointer"
            >
              <Trash2 />
              <p>Delete</p>
            </div>
          </div>
          <div className="bg-gray-800 text-center py-4 my-2 rounded-xl space-y-2">
            <h5>Contact info from</h5>
            <div className="flex items-center justify-center">
              <p className="bg-blue-500 w-6 h-6 mx-2 text-xs font-semibold flex items-center justify-center rounded-full">
                {loggedUser?.name?.[0].toUpperCase()}
              </p>
              <span>{loggedUser.email}</span>
            </div>
          </div>
          <hr className="text-gray-500 mt-5" />
          <p className="text-center pt-6">Help & feedback</p>
        </div>
      </div>
    </div>
  );
}
