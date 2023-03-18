import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [picture, setPicture] = useState(null);
  const [progressbar, setProgressBar] = useState(0);

  return (
    <UserContext.Provider
      value={{ picture, setPicture, progressbar, setProgressBar }}
    >
      {children}
    </UserContext.Provider>
  );
};
