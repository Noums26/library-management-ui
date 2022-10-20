import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const client = axios.create({
    baseURL: 'http://localhost:3000'
  })

  const contextValue = {
    isAdmin,
    setIsAdmin,
    client
  };

  return (
      <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};