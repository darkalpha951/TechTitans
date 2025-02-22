import React, { useContext, useState } from "react";
import { FaSort, FaArrowUp, FaArrowDown } from "react-icons/fa";
import TransactionContext from "./contexts/TransactionContext";
import BalanceContext from "./contexts/BalanceContext";

const Transactions = () => {
    const { transactions } = useContext(TransactionContext);
    const { balance } = useContext(BalanceContext);
    const [selectedDate, setSelectedDate] = useState("");
    const [profitLoss, setProfitLoss] = useState(0);

    const handleSort = () => {
        const filteredTransactions = transactions.filter(tx => tx.date.split(" ")[0] === selectedDate);
        const profitLossValue = filteredTransactions.reduce((acc, tx) => {
            return tx.type === "Sell" ? acc + (tx.price * tx.quantity) : acc - (tx.price * tx.quantity);
        }, 0);
        setProfitLoss(profitLossValue);
    };

    const parseDateTime = (dateTimeStr) => {
        const [datePart, timePart] = dateTimeStr.split(" ");
        const [dd, mm, yyyy] = datePart.split("/").map(Number);
        const [hh, min, sec] = timePart.split(":").map(Number);
        return new Date(yyyy, mm - 1, dd, hh, min, sec);
    };

    const sortedTransactions = [...transactions].sort((a, b) => parseDateTime(b.date) - parseDateTime(a.date));

    return (
        <div className="flex w-full p-6 space-x-6">
            <div className="flex-1 bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4">Transactions</h2>
                <div className="w-full">
                    <div className="grid grid-cols-7 font-bold pb-2">
                        <span>Type</span>
                        <span>Price</span>
                        <span>Symbol</span>
                        <span>Quantity</span>
                        <span>Status</span>
                        <span>Date</span>
                        <span>Time</span>
                    </div>
                    <ul>
                        {sortedTransactions.map((tx, index) => (
                            <li key={index} className="grid grid-cols-7 py-3">
                                <span className={`font-bold ${tx.type === "Buy" ? "text-green-500" : "text-red-500"}`}>{tx.type}</span>
                                <span>{tx.price}</span>
                                <span>{tx.name}</span>
                                <span>{tx.quantity}</span>
                                <span className={tx.type === "Buy" ? "text-green-500" : "text-red-500"}>
                                    {tx.type === "Buy" ? <FaArrowUp /> : <FaArrowDown />}
                                </span>
                                <span>{tx.date.split(" ")[0]}</span>
                                <span>{tx.date.split(" ")[1]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-64 space-y-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-bold">Total Balance</h2>
                    <p className="text-2xl font-semibold mt-2">{balance.balance} {balance.currency}</p>
                </div>

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
                        {profitLoss >= 0 ? `+₹${profitLoss}` : `-₹${Math.abs(profitLoss)}`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
