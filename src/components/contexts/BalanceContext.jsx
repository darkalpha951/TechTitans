import React, { createContext, useState } from "react";

const BalanceContext = createContext();

// TODO: MANAGE DATABASE SO THAT INIFINITE MONEY GLITCH CAN BE PREVENTED!

export const BalanceContextProvider = ({ children }) => {
    const [balance, setBalance] = useState({balance: 50000 , currency: "USD"})
    // console.log(balance)

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};

export default BalanceContext