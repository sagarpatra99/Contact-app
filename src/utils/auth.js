const USERS_KEY = "allUsers";
const LOGGED_IN_USER_KEY = "loggedInUser";

export const getAllUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (newUser) => {
  const existingUsers = getAllUsers();

  const isUserExists = existingUsers.some(
    (user) => user.email === newUser.email
  );

  if (isUserExists) {
    throw new Error("User already exists with this email");
  }

  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
};

export const loginUser = ({ email, password }) => {
  const users = getAllUsers();

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!matchedUser) {
    throw new Error("Invalid email or password!");
  }

  localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(matchedUser));
  return matchedUser;
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem("loggedInUser")) || [];
};

export const logoutUser = () => {
  localStorage.removeItem(LOGGED_IN_USER_KEY);
};

export const saveContact = (newContact) => {
  const loggedUser = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
  const allUsers = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  if (!loggedUser) {
    throw new Error("User not logged in");
  }

  const updatedContacts = [...loggedUser.contacts, newContact];

  const updatedLoggedUser = {
    ...loggedUser,
    contacts: updatedContacts,
  };

  const updatedAllUsers = allUsers.map((user) =>
    user.email === loggedUser.email ? updatedLoggedUser : user
  );

  localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(updatedLoggedUser));
  localStorage.setItem(USERS_KEY, JSON.stringify(updatedAllUsers));
};

export const deleteContact = (contactIndex) => {
  const loggedUser = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));

  if(!loggedUser) {
    throw new Error("User not logged in");
  }

  loggedUser.contacts.splice(contactIndex, 1);

  localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(loggedUser))
}
