// src/components/Investments/Investments.jsx
import React from 'react'
import { InvestmentProvider } from '../components/contexts/InvestmentContext'
import InvestmentProductFinder from './Investments/InvestmentProductFinder'
import { TransactionProvider } from './contexts/TransactionContext'

const Investments = () => {
    const balance = "50000"
    return (
        <InvestmentProvider>
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-semibold mb-6">Investments</h2>
                <InvestmentProductFinder balance={balance} />
            </div>
        </InvestmentProvider>
    );
};

export default Investments;