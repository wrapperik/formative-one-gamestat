import React, { useState } from 'react';

const Footer = () => {
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);

  const toggleFooter = () => {
    setIsFooterExpanded(!isFooterExpanded);
  };

  return (
    <div className={`fixed bottom-0 w-full bg-[#171d25]/95 backdrop-blur-md !border-t !border-[#3c4f62]/15 transition-all duration-300 z-50 ${isFooterExpanded ? 'h-64' : 'h-12'} md:left-[250px] md:w-[calc(100%-250px)] left-0`}>
      <div className="flex items-center justify-center h-12 cursor-pointer hover:bg-[#2a3f5f]/30 transition-colors" onClick={toggleFooter}>
        <span className="text-white font-semibold tracking-wide">About</span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isFooterExpanded ? 'opacity-100 max-h-52' : 'opacity-0 max-h-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 pr-8">
          <div className="text-[#8b9bb4] text-sm">
            <p>The ultimate platform for gamers and developers to explore, compare, and analyse game data like never before. Whether you're a casual player searching for your next favourite title or a developer studying industry trends, we provide the tools you need to dive deep into the gaming world.</p>
          </div>
          <div className="text-[#8b9bb4] text-sm">
            <p>With our powerful comparison features, you can stack games side by side—breaking down genres, reviews, and available platforms in one place. Our extensive database keeps you updated with the latest releases, industry insights, and historical data to help you make informed decisions.</p>
          </div>
          <div className="text-[#8b9bb4] text-sm">
            <p>Join a growing community of gaming enthusiasts and professionals who are passionate about understanding and shaping the future of interactive entertainment. Start exploring today!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
