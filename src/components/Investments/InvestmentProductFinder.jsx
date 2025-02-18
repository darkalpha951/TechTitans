import React, { useContext, useState } from 'react';
import { useInvestments } from '../contexts/InvestmentContext'
import TransactionContext from '../contexts/TransactionContext'

const InvestmentProductFinder = () => {
    const useTransactions = useContext(TransactionContext)
    const { addInvestment } = useInvestments();
    const { addTransaction } = useTransactions;
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isButtonClickedAndNoResult, setIsButtonClickedAndNoResult] = useState(false)

    // Function to handle the search action (when the button is clicked)
    const handleSearch = () => {
        // TODO: API CALL
        // For now, let's have some sample results
        const simulatedResults = [
            { id: 1, name: 'Reliance', price: 1000, profitLoss: 10 },
            { id: 2, name: 'Infosys', price: 1500, profitLoss: -5 },
            { id: 3, name: 'NIFTY50', price: 2000, profitLoss: 20 },
        ];

        const filteredResults = simulatedResults.filter(option =>
            option.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        // Set the filtered results to state
        setResults(filteredResults);
        setIsButtonClickedAndNoResult(filteredResults.length === 0);
        setTimeout(() => {
            setIsButtonClickedAndNoResult(false)
        }, 2000);
    };

    // Function to update the search input value
    const handleInputChange = (e) => {
        setIsButtonClickedAndNoResult(false)
        setSearchQuery(e.target.value);
    };

    const handleBuy = (investment) => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0'); 
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear()
        const date = `${dd}/${mm}/${yyyy}`
        console.log("Buying:", investment);
        addTransaction({ type: 'Buy', ...investment, date: date });
    };
    
    const handleSell = (investment) => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0'); 
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear()
        const date = `${dd}/${mm}/${yyyy}`
        console.log("Selling:", investment);
        addTransaction({ type: 'Sell', ...investment, date: date });
    };

    const { transactions } = useTransactions;
    console.log("Current Transactions:", transactions);

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

            {/* Display the results below the input field */}
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
                                <div className="flex items-center space-x-4">
                                    <p className={`font-bold ${result.profitLoss > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {result.profitLoss > 0 ? `+${result.profitLoss}%` : `${result.profitLoss}%`}
                                    </p>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={() => handleBuy(result)}>
                                        Buy
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => handleSell(result)}>
                                        Sell
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* If no results, display a message */}
            {isButtonClickedAndNoResult && searchQuery && (
                <div className="mt-4 text-red-500">No results found for "{searchQuery}".</div>
            )}
        </div>
    );
};

export default InvestmentProductFinder;
