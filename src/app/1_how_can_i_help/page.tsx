"use client"

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';

import React, { useState, useEffect } from 'react';
import './_1HowCanIHelp.css';
import { MoreHorizontalIcon } from 'lucide-react';

export default function Index() {


  const [statsAnimated, setStatsAnimated] = useState(false);
  const [showinput, setShowInput] = useState(true);

  const configJson = {
    defaultPromptPlaceholder: 'What can I help you with today?',
    thinkingMessage: 'Thinking...',
    unknownResponse: 'I\'m not sure about that. Try asking something else.',
    cisoResponse: 'Showing stats for CISO controls...',
    moreResponse: 'Tell me more about my peer comparison',
    hintSoundRecord: 'You can record a sound',
    hintCancel: "Cancel",
    searchIcon: <SearchIcon className="icon" />,
    closeIcon: <CloseIcon className="icon" />,
    stats: {
      percentage: '24%',
      deltaLabel: 'Delta Loss',
      likelihoodButton: 'Likelihood',
      lossMagnitudeButton: 'Loss Magnitude',
      maturityLevels: [
        { label: 'Maturity 2', isCurrent: true },
        { label: 'Maturity 3', isCurrent: false }
      ]
    }
  };


  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [hint, setHint] = useState(configJson.hintSoundRecord);
  const [icon, setIcon] = useState(configJson.searchIcon);
  const [isThinking, setIsThinking] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);


  useEffect(() => {
    // Trigger stats animation after a delay
    setTimeout(() => {
      setStatsAnimated(true);
    }, 300);
  }, [showStats]);

  const handlePrompt = () => {
    setIsThinking(true);
    setResponse('');
    setShowStats(false);
    setShowPrompt(true);
    setShowInput(false);
    setStatsAnimated(false);

    setTimeout(() => {
      if (prompt.includes('CISO')) {
        setResponse(configJson.cisoResponse);
        setShowStats(true);
        //setShowPrompt(false);
      }
      else if (prompt.includes('Tell me more about my peer comparison')) {
        setShowStats(true);
      } else {
        setResponse(configJson.unknownResponse);
      }
      setIsThinking(false);
      setHint(configJson.hintCancel);
      setIcon(configJson.closeIcon);
    }, 2000);
  };


  return (
    <div className="ai-container fade-in ">
      <div className="header">
        <div className="user-info">
          <div className="avatar" />
        </div>
      </div>
      <div className=' flex flex-col justify-between items-center h-[15vh] p-4'>
        <div className=" text-2xl text-[#9066BA] text-centre flex items-center justify-center w-full h-fit mb-0">
          {!showinput && <>{prompt}</>}
        </div>

        <div className="fade-in">
          {isThinking && <div className="thinking-bubble">{configJson.thinkingMessage}</div>}
          {response && !isThinking && <p>{response}</p>}
        </div>
      </div>

      {showStats && (
        <div className="stats fade-in">

          <div className="relative flex gap-4 bg-[#252759] rounded-full p-1 mb-5 ">
            <button
              className=" py-3 px-6 rounded-full text-sm font-medium transition-all bg-blue-500 text-white text-gray-300 overflow-hidden"
            >
              {configJson.stats.likelihoodButton}
            </button>
            <button
              className=" py-3 px-6 rounded-full text-sm font-medium transition-all text-gray-300 oevrflow-hidden"
            >
              {configJson.stats.lossMagnitudeButton}
            </button>
            <div className="absolute left-[110px] px-3 bottom-[-15px] transform z-10 overflow-hidden">
              <div className="bg-black m-1 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                <MoreHorizontalIcon className="text-gray-300" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <div className={`text-4xl font-extralight mb-1 transition-all duration-1000 ${statsAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                {configJson.stats.percentage}
              </div>
              <div className="text-gray-300 text-sm">
                {configJson.stats.deltaLabel}
              </div>
            </div>
            <div className="bg-[#383b6d] rounded-lg h-12 w-12 flex items-center justify-center">
              <ArrowForwardIcon className="text-gray-200 rotate-[320deg]" />
            </div>
          </div>

          <div className={`w-full h-12 my-1 relative transition-all duration-1500 ${statsAnimated ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 flex items-end">
              {Array.from({ length: 30 }).map((_, i) => {
                const height = Math.random() * 85 + 15;
                return (
                  <div
                    key={i}
                    className="flex-1 mx-px rounded-t-sm transition-all duration-1000"
                    style={{
                      height: `${height}%`,
                      backgroundColor: `rgba(${100 + Math.floor(height * 1.5)}, ${150 + Math.floor(height * 0.5)}, 255, 0.7)`,
                      transitionDelay: `${i * 30}ms`,
                      transform: statsAnimated ? 'scaleY(1)' : 'scaleY(0)'
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex justify-between mt-8 space-x-4 rounded-full">
            {configJson.stats.maturityLevels.map((level, index) => (
              <div
                key={index}
                className={` flex  p-3  rounded-full items-center px-6 justify-between ${level.isCurrent ? 'bg-[#252759] border border-yellow-500/30' : 'bg-[#252759]'} transition-all duration-700 ${statsAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2 rounded-full" />
                <div className='flex flex-col justify-between items-center w-full'>
                  <span className="text-sm font-medium text-white">{level.label}</span>
                  {level.isCurrent && <span className=" text-gray-400 text-xs">Current</span>}
                  {!level.isCurrent && <span className="text-gray-400 text-xs">Next</span>}
                  {level.isCurrent && <span className="ml-1 text-gray-400"></span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showinput && (
        <>
          <button
            className="h-10 w-10 fixed bottom-[8vh] left-[1vw] rounded-full bg-[#252759] z-[100] bg-gray-600"
            onClick={() => {setShowInput(!showinput);setShowStats(false);setShowPrompt(true);setIsThinking(false);setHint(configJson.hintSoundRecord);setIcon(configJson.searchIcon);setResponse('');setPrompt('');}}
          >
            <AddIcon className="text-white" />

          </button>
          <div className="h-2 flex items-center space-x-2 w-full justify-center fixed bottom-[10vh] left-0 z-[100]">
            <div className="h-1 w-8 bg-gray-500 rounded-full"></div>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          </div>
        </>
      )}

      {showinput && (<div className="prompt fade-in">
        <input
          type="text"
          placeholder={configJson.defaultPromptPlaceholder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handlePrompt}>Submit</button>
      </div>)}
    </div>
  );
}
