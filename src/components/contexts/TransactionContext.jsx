import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        console.log("Before Update:", transactions);
        setTransactions((prev) => {
            console.log("Updated Transactions:", [...prev, transaction]);
            return [...prev, transaction]; // Ensures state updates correctly
        });
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};

export default TransactionContext
