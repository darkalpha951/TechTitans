import React, { useContext, useState } from 'react';
import { useInvestments } from '../contexts/InvestmentContext'
import TransactionContext from '../contexts/TransactionContext'
import BalanceContext from '../contexts/BalanceContext';

const InvestmentProductFinder = () => {
    const { balance, setBalance } = useContext(BalanceContext);
    const useTransactions = useContext(TransactionContext);
    const { addInvestment } = useInvestments();
    const { addTransaction } = useTransactions;
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isButtonClickedAndNoResult, setIsButtonClickedAndNoResult] = useState(false);
    const [quantities, setQuantities] = useState({}); // Track input quantities

    const simulatedResults = [
        { id: 1, name: 'Reliance', price: 1000, profitLoss: 10 },
        { id: 2, name: 'Infosys', price: 1500, profitLoss: -5 },
        { id: 3, name: 'NIFTY50', price: 2000, profitLoss: 20 },
        { id: 4, name: 'TCS', price: 1800, profitLoss: 15 },
        { id: 5, name: 'HDFC Bank', price: 2200, profitLoss: -10 },
        { id: 6, name: 'ICICI Bank', price: 1700, profitLoss: 8 },
        { id: 7, name: 'HUL', price: 2500, profitLoss: -12 },
        { id: 8, name: 'Bajaj Finance', price: 3000, profitLoss: 25 },
        { id: 9, name: 'SBI', price: 1200, profitLoss: -7 },
        { id: 10, name: 'Asian Paints', price: 2800, profitLoss: 18 }
    ];

    const handleSearch = () => {
        const filteredResults = simulatedResults.filter(option =>
            option.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setResults(filteredResults);
        setIsButtonClickedAndNoResult(filteredResults.length === 0);
        setTimeout(() => setIsButtonClickedAndNoResult(false), 2000);
    };

    const handleInputChange = (e) => {
        setIsButtonClickedAndNoResult(false);
        setSearchQuery(e.target.value);
    };

    const getCurrentDate = () => {
        const today = new Date();
        return `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;
    };

    const handleQuantityChange = (id, value) => {
        if (value < 0) return;
        setQuantities((prev) => ({ ...prev, [id]: value }));
    };

    const handleTransaction = (type, investment) => {
        const quantity = quantities[investment.id] || 1; // Default to 1 if no input
        const totalCost = investment.price * quantity;

        if (type === "Buy" && totalCost > balance.balance) {
            console.log("Not enough balance!");
            return;
        }

        const currentDate = getCurrentDate();
        const newBalance = type === 'Buy' 
            ? balance.balance - totalCost 
            : balance.balance + totalCost;

        setBalance({ balance: newBalance, currency: balance.currency });

        addTransaction({
            type,
            ...investment,
            quantity,
            totalCost,
            date: currentDate
        });
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Investment Product Finder</h3>
            <input
                type="text"
                placeholder="Search for an investment..."
                value={searchQuery}
                onChange={handleInputChange}
                className="p-2 w-full rounded-md bg-white border border-gray-300"
            />
            <div className="mt-4">
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Find Investment
                </button>
            </div>

            {results.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-lg font-semibold">Search Results:</h4>
                    <ul className="space-y-2 mt-3">
                        {results.map((result) => (
                            <li key={result.id} className="flex justify-between items-center bg-white p-4 rounded-md shadow-md">
                                <div className="flex-1">
                                    <h5 className="font-semibold">{result.name}</h5>
                                    <p className="text-gray-500">Price: ₹{result.price}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantities[result.id] || ""}
                                        onChange={(e) => handleQuantityChange(result.id, parseInt(e.target.value))}
                                        placeholder="Qty"
                                        className="p-2 w-16 rounded-md border border-gray-300"
                                    />
                                    <p className={`font-bold ${result.profitLoss > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {result.profitLoss > 0 ? `+${result.profitLoss}%` : `${result.profitLoss}%`}
                                    </p>
                                    <button 
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                        onClick={() => handleTransaction("Buy", result)}
                                    >
                                        Buy
                                    </button>
                                    <button 
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                        onClick={() => handleTransaction("Sell", result)}
                                    >
                                        Sell
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {isButtonClickedAndNoResult && searchQuery && (
                <div className="mt-4 text-red-500">No results found for "{searchQuery}".</div>
            )}
        </div>
    );
};

export default InvestmentProductFinder;
