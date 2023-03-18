import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [picture, setPicture] = useState(null);
  const [progressbar, setProgressBar] = useState(0);
  const [config, setConfig] = useState(null)

  return (
    <UserContext.Provider
      value={{ picture, setPicture, progressbar, setProgressBar, config, setConfig }}
    >
      {children}
    </UserContext.Provider>
  );
};
