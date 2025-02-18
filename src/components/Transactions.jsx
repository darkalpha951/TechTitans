import React, { useContext, useState } from "react";
import { FaSort, FaArrowUp, FaArrowDown } from "react-icons/fa";
import TransactionContext from '../components/contexts/TransactionContext';

// const transactions = [
//     { id: 1, detail: "Bought BTC", qty: "0.002", symbol: "BTC", profit: true, date: "2025-02-15" },
//     { id: 2, detail: "Sold ETH", qty: "0.5", symbol: "ETH", profit: false, date: "2025-02-15" },
//     { id: 3, detail: "Sold XEM", qty: "0.05", symbol: "XEM", profit: true, date: "2025-02-15" },
//     { id: 4, detail: "Sold XRP", qty: "0.15", symbol: "XRP", profit: true, date: "2025-02-15" },
//     { id: 5, detail: "Deposited USD", qty: "$500", symbol: "", profit: true, date: "2025-02-14" },
// ];

const Transactions = () => {
    const useTransactions = useContext(TransactionContext)
    const [totalBalance, setTotalBalance] = useState("$12,340");
    const [selectedDate, setSelectedDate] = useState("");
    const [profitLoss, setProfitLoss] = useState(0);
    const { transactions } = useTransactions;
    console.log("Transactions in Transactions.jsx:", transactions);

    const handleSort = () => {
        const filteredTransactions = transactions.filter(tx => tx.date === selectedDate);
        const profitLossValue = filteredTransactions.reduce((acc, tx) => {
            return tx.profit ? acc + 100 : acc - 100; // Example calculation
        }, 0);
        setProfitLoss(profitLossValue);
    };

    const sortedTransactions = [...transactions].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    console.log(sortedTransactions)

    return (
        <>
            <div className="flex w-full p-6 space-x-6">
                {/* Transactions List */}
                <div className="flex-1 bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Transactions</h2>
                    <div className="w-full">
                        <div className="grid grid-cols-5 font-bold pb-2">
                            <span>Detail</span>
                            <span>Price</span>
                            <span>Symbol</span>
                            <span>Status</span>
                            <span>Date</span>
                        </div>
                        <ul>
                            {sortedTransactions.map((tx, index) => (
                                <li key={index+1} className="grid grid-cols-5 py-3">
                                    <span>{tx.type}</span>
                                    <span>{tx.price}</span>
                                    <span>{tx.name}</span>
                                    <span className={tx.type === "Buy" ? "text-green-500" : "text-red-500"}>
                                        {tx.type === "Buy" ? <FaArrowUp /> : <FaArrowDown />}
                                    </span>
                                    <span>{tx.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Summary Panel */}
                <div className="w-64 space-y-4">
                    {/* Total Balance */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-bold">Total Balance</h2>
                        <p className="text-2xl font-semibold mt-2">{totalBalance}</p>
                    </div>

                    {/* Profit/Loss Sorting */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-bold mb-2">Profit/Loss</h2>
                        <div className="flex items-center space-x-2">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="border p-1 rounded flex-1"
                            />
                            <button
                                onClick={handleSort}
                                className="p-2 bg-gray-200 rounded flex-shrink-0"
                            >
                                <FaSort />
                            </button>
                        </div>
                        <p className={`text-2xl font-semibold mt-2 ${profitLoss >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {profitLoss >= 0 ? `+$${profitLoss}` : `-$${Math.abs(profitLoss)}`}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transactions;