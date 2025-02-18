import React from 'react'

const RiskAssessmentQuiz = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-2">Risk Assessment Quiz</h3>
                <p className="mb-4">Please answer the following questions to assess your risk tolerance.</p>
                <div className="flex flex-col space-y-3">
                    <label className="flex items-center">
                    <input type="radio" name="risk" className="mr-2" />
                    Low Risk
                    </label>
                    <label className="flex items-center">
                    <input type="radio" name="risk" className="mr-2" />
                    Medium Risk
                    </label>
                    <label className="flex items-center">
                    <input type="radio" name="risk" className="mr-2" />
                    High Risk
                    </label>
                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default RiskAssessmentQuiz
