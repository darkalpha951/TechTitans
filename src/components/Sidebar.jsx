import { Link } from "react-router-dom";
import { FaHome, FaSyncAlt, FaWallet, FaChartBar, FaMicrochip, FaUniversity } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-64 bg-green-600 text-white h-screen p-6">
            <h2 className="text-xl font-bold mb-6 text-center"><Link to='./'>FINSIGHT</Link></h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-2"><FaHome size={20} /><Link to="/dashboard" className="block hover:text-gray-300">Dashboard</Link></li>
                <li className="flex items-center gap-2"><FaSyncAlt size={20} /><Link to="/investments" className="block hover:text-gray-300">Investments</Link></li>
                <li className="flex items-center gap-2"><FaWallet size={20} /><Link to="/marketing-schemes" className="block hover:text-gray-300">Marketing Scheme</Link></li>
                <li className="flex items-center gap-2"><FaChartBar size={20} /><Link to="/education-hub" className="block hover:text-gray-300">Education Hub</Link></li>
                <li className="flex items-center gap-2"><FaMicrochip size={20} /><Link to="/ai-investment-tools" className="block hover:text-gray-300">AI Investment Tools</Link></li>
                <li className="flex items-center gap-2"><FaUniversity size={20} /><Link to="/transactions" className="block hover:text-gray-300">Transactions</Link></li>
            </ul>
        </div>
    );
}
