import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = (props) => {
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
  const deleteToken = () => {
    localStorage.removeItem("jwt");
    changeToken(null)
  };
  return (
    <TokenContext.Provider value={{ token, changeToken, deleteToken }}>
      {props.children}
    </TokenContext.Provider>
  );
};

const useToken = () => {
  return useContext(TokenContext);
};

export { TokenProvider, useToken };
