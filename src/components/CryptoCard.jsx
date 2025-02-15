import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CryptoCard = ({ icon, name, price, change, data, color, className }) => {

  return (
        <div className={`bg-white p-4 rounded-xl shadow-md flex flex-col w-60 ${className}`}>
            <div className="flex items-center space-x-3">
                <div className={`text-2xl ${color}`}>{icon}</div>
                <div>
                    <p className="text-sm text-gray-500">{name}</p>
                    <p className="text-xl font-bold">{price}</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <p className={`text-sm font-bold ${change > 0 ? "text-green-500" : "text-red-500"}`}>
                {change > 0 ? `+${change}%` : `${change}%`}
                </p>
            </div>

            <div className="w-full h-12 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="price" stroke={color} strokeWidth={2} dot={false} />
                        <XAxis dataKey="time" hide />
                        <YAxis hide />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
  );
};

export default CryptoCard;