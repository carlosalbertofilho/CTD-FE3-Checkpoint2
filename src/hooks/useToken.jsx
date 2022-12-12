import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = (props) => {
  const tokenLocalStorage = localStorage.getItem("jwt");
  const [token, setToken] = useState(
    tokenLocalStorage !== null ? tokenLocalStorage : ""
  );
  const changeToken = (tokenReceived) => {
    if ( tokenReceived !== token ) {
      setToken(tokenReceived);
      localStorage.setItem("jwt", tokenReceived);
    }
  };
  return (
    <TokenContext.Provider value={{ token, changeToken }}>
      {props.children}
    </TokenContext.Provider>
  );
};

const useToken = () => {
  return useContext(TokenContext);
};

export {TokenProvider, useToken};
