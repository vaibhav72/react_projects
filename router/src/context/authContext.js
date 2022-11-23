import React, { createContext ,useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
