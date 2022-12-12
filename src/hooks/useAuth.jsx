import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const tokenLocalStorage = localStorage.getItem("jwt");
  const [token, setToken] = useState(
    tokenLocalStorage !== null ? tokenLocalStorage : ""
  );
  const changeToken = (tokenReceived) => {
    if (tokenReceived !== token) {
      setToken(tokenReceived);
      localStorage.setItem("jwt", tokenReceived);
    }
  };
  return (
    <AuthContext.Provider value={{ token, changeToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useToken = () => {
  return useContext(AuthContext);
};
