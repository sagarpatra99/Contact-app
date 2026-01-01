import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import SignUp from "./components/signup.jsx";
import Login from "./components/login.jsx";
import NotFound from "./components/not-found.jsx";
import Welcome from "./components/welcome.jsx";
import Contact from "./components/contact.jsx";
import ContactDetails from "./components/contact-details.jsx";
import AddContact from "./components/add-contact.jsx";

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/contact/:contactId",
        element: <ContactDetails />
      },
      {
        path: "/add-contact",
        element: <AddContact />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
