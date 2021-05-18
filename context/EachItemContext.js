import React, { createContext, useContext, useState } from "react";

const EachItemContext = createContext({
  currentItem: {},
  addItem: () => {},
});

export const EachItem = ({ children }) => {
  const [currentItem, setCurrentItem] = useState();

  const addItem = (item) => {
    setCurrentItem(item);
  };

  return (
    <EachItemContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        addItem,
      }}
    >
      {children}
    </EachItemContext.Provider>
  );
};

export const currentItemConsumer = EachItemContext.Consumer;

export const useCurrentItem = () => {
  return useContext(EachItemContext);
};
