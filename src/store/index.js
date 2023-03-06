import { createContext, useContext, useState } from "react";

const CreateStateContext = createContext({});

export const StoreProvider = ({ children }) => {
	const [showFilterModal, SetShowFilterModal] = useState(false);
  return (
    <>
      <CreateStateContext.Provider value={{ showFilterModal, SetShowFilterModal  }}>
        {children}
      </CreateStateContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
	return useContext(CreateStateContext);
}
