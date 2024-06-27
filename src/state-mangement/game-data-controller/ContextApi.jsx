import React, { useReducer, useContext, createContext } from "react";

import { initialState, reducer } from "./stateAndReducer";

const DataContext = createContext();

export const useDataValue = () => {
  return useContext(DataContext);
};

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
