import { createContext, useContext, useState } from "react";

const ClientNameContext = createContext();

const ClientNameProvider = (props) => {
  const clientNameStorage = localStorage.getItem("clientName");
  const [clientName, setName] = useState(
    clientNameStorage !== null ? clientNameStorage : ""
  );
  const changeClientName = (nameReceived) => {
    if (nameReceived !== clientName) {
      setName(nameReceived);
      localStorage.setItem("clientName", nameReceived);
    }
  };

  return(
    <ClientNameContext.Provider value={{ clientName, changeClientName }}>
      {props.children}
    </ClientNameContext.Provider>
  );
};

const useClientName = () => {
  return useContext(ClientNameContext);
};

export { ClientNameProvider, useClientName }
