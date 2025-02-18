// src/context/InvestmentContext.js
import React, { createContext, useContext, useState } from 'react';

const InvestmentContext = createContext();

export const useInvestments = () => {
  return useContext(InvestmentContext);
};

export const InvestmentProvider = ({ children }) => {
  const [investments, setInvestments] = useState([]);

  const addInvestment = (investment) => {
    setInvestments((prevInvestments) => [...prevInvestments, investment]);
  };

  return (
    <InvestmentContext.Provider value={{ investments, addInvestment }}>
      {children}
    </InvestmentContext.Provider>
  );
};
