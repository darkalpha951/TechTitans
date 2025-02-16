import React, {useContext, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Investments from "./components/Investments";
import Referrals from "./components/Referrals";
import EducationHub from "./components/EducationHub";
import AiInvestmentTools from "./components/AiInvestmentTools";
import Transactions from "./components/Transactions"

export default function CryptoDashboard() {

    return (
        <div className="flex h-screen bg-gray-100 w-full">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <div className="p-4 flex-grow overflow-y-auto">
                    <Routes>
                        {/* TODO: LOGIN/SIGNUP */}
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/investments" element={<Investments />} />
                        <Route path="/referrals" element={<Referrals />} />
                        <Route path="/education-hub" element={<EducationHub />} />
                        <Route path="/ai-investment-tools" element={<AiInvestmentTools />} />
                        <Route path="/transactions" element={<Transactions />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}