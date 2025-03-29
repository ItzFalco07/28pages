"use client"
import React, { useState } from 'react';
import { ArrowLeft, Keyboard } from 'lucide-react';

export default function FinancialInsights() {
  const [input, setInput] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = [
    'Reading Forbes',
    'Analyzing stock history',
    'Generating results for you...'
  ];

  const handleStartProcess = () => {
    if (input.trim() === '') return;
    setLoadingStep(1);
    let stepIndex = 1;
    const interval = setInterval(() => {
      if (stepIndex >= steps.length) {
        clearInterval(interval);
      } else {
        setLoadingStep(stepIndex + 1);
        stepIndex++;
      }
    }, 1500);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="w-[360px] h-[700px] bg-white rounded-3xl shadow-xl p-6 relative">
        <div className="text-sm text-gray-400">Imagica</div>
        <h2 className="text-xl max-w-[80%] mt-4 text-gray-500">What financial insights can I give you today?</h2>

        {loadingStep === 0 ? (
          <>
            <input
              type="text"
              className="w-full mt-6  bg-transparent text-xl text-black outline-none"
              placeholder="I want recession-proof stocks"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 mt-6 rounded-xl text-lg"
              onClick={handleStartProcess}
            >
              Submit
            </button>
          </>
        ) : (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">I want {input || 'recession-proof stocks'}</h3>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-fit mb-2 px-3 py-1 rounded-full text-sm ${index < loadingStep ? 'bg-gray-200 text-gray-600' : 'bg-gray-100 text-gray-400'}`}
              >
                {index + 1 < loadingStep ? '✔' : index + 1 === loadingStep ? '...' : ''} {step}
              </div>
            ))}
          </div>
        )}

        <ArrowLeft stroke='#808080' className='absolute bottom-6 left-6 cursor-pointer'/>
        <Keyboard stroke='#808080' className='absolute bottom-6 right-6 cursor-pointer'/>

        <div className="absolute cursor-pointer bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
