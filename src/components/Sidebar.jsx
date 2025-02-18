import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSyncAlt, FaWallet, FaChartBar, FaMicrochip, FaUniversity } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
    const [transactionsOpen, setTransactionsOpen] = useState(false);
    return (
        <div className={`w-64 bg-green-600 text-white h-screen p-6 transform transition-all duration-300`}>
            <h2 className="text-xl font-bold mb-6 text-center"><Link to='./'>FINSIGHT</Link></h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-2"><FaHome size={20} /><Link to="/dashboard" className="block hover:text-gray-300">Dashboard</Link></li>
                <li className="flex items-center gap-2"><FaSyncAlt size={20} /><Link to="/investments" className="block hover:text-gray-300">Investments</Link></li>
                {/* Education Hub Dropdown */}
                <li>
                    <div
                        className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
                        onClick={() => setTransactionsOpen(!transactionsOpen)}
                    >
                        <FaChartBar size={20} />
                        <span>Education Hub</span>
                        <ChevronDown
                            className={`ml-auto transition-transform ${transactionsOpen ? "rotate-180" : ""}`}
                        />
                    </div>
                    {transactionsOpen && (
                        <ul className="ml-6 mt-2 space-y-2 text-sm">
                            <li><Link to="/transactions/endpoint1" className="block hover:text-gray-300">Endpoint 1</Link></li>
                            <li><Link to="/transactions/endpoint2" className="block hover:text-gray-300">Endpoint 2</Link></li> 
                        </ul>
                    )}
                </li>
                {/* <li className="flex items-center gap-2"><FaChartBar size={20} /><Link to="/education-hub" className="block hover:text-gray-300">Education Hub</Link></li> */}
                <li className="flex items-center gap-2"><FaUniversity size={20} /><Link to="/transactions" className="block hover:text-gray-300">Transactions</Link></li>
                <li className="flex items-center gap-2"><FaMicrochip size={20} /><Link to="/ai-investment-tools" className="block hover:text-gray-300">AI Investment Tools</Link></li>
                <li className="flex items-center gap-2"><FaWallet size={20} /><Link to="/referrals" className="block hover:text-gray-300">Referrals</Link></li>
                
            </ul>
        </div>
    );
}
