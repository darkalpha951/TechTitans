import { useRef, useState } from "react";
import { FaBars, FaCube, FaCog, FaChartLine } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [search, setSearch] = useState("")
    const input = useRef()

    const handleClick = (e) => {
        console.log(`User searched for "${search}"`)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <nav className="flex items-center justify-between bg-white shadow-md px-6 py-3 z-50">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
                <FaBars className="text-gray-600 text-lg cursor-pointer" />
                <FaCube className="text-gray-600 text-lg cursor-pointer" />
                <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer" onClick={handleClick}/>
                    <input
                        type="text"
                        placeholder="Type any cryptocurrency..."
                        className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none w-72"
                        ref={input}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
                <Link to='./settings'><FaCog className="text-gray-600 text-lg cursor-pointer" /></Link>
                {/* <FaChartLine className="text-green-500 text-lg cursor-pointer" /> */}
                <img 
                    src="/profile.jpg" 
                    alt="User" 
                    className="w-8 h-8 rounded-full shadow-md"
                />
                {/* <img 
                    src="/india_flag.jpg" 
                    alt="Language" 
                    className="w-8 h-8 rounded-full cursor-pointer"
                /> */}
            </div>
        </nav>
    );
}
