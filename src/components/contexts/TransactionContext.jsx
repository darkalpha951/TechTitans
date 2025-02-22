import React, { createContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [currentStocks, setCurrentStocks] = useState({}); // Stores latest bought stocks with quantity

    const addTransaction = (transaction) => {
        setTransactions((prev) => [...prev, transaction]);

        // Update currentStocks if it's a Buy transaction
        if (transaction.type === "Buy") {
            setCurrentStocks((prevStocks) => {
                const newStocks = { ...prevStocks };
                if (newStocks[transaction.name]) {
                    newStocks[transaction.name].quantity += transaction.quantity;
                } else {
                    newStocks[transaction.name] = {
                        price: transaction.price,
                        quantity: transaction.quantity,
                        date: transaction.date
                    };
                }
                return newStocks;
            });
        }

        // Remove or update stock if it's a Sell transaction
        if (transaction.type === "Sell") {
            setCurrentStocks((prevStocks) => {
                const newStocks = { ...prevStocks };
                if (newStocks[transaction.name]) {
                    newStocks[transaction.name].quantity -= transaction.quantity;
                    if (newStocks[transaction.name].quantity <= 0) {
                        delete newStocks[transaction.name]; // Remove stock if quantity is 0
                    }
                }
                return newStocks;
            });
        }
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, currentStocks }}>
            {children}
        </TransactionContext.Provider>
    );
};

export default TransactionContext;