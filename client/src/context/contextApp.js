import { createContext, useState } from 'react';

export const contextApp = createContext();


function ContextProvider({ children }) {
  const [ users, setUsers ] = useState([]);
  const [msg, setMsg] = useState(null);

  const value = {
    users,
    setUsers,
    msg,
    setMsg
  }

  return (
    <contextApp.Provider value={value}>
      {children}
    </contextApp.Provider>
  );
}

export default ContextProvider;