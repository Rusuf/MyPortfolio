
import React, { useState, useEffect } from 'react';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The universe is a pretty big place. If it's just us, seems like an awful waste of space.",
    author: "Carl Sagan"
  },
  {
    text: "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
    author: "Arthur C. Clarke"
  },
  {
    text: "The cosmos is within us. We are made of star-stuff.",
    author: "Carl Sagan"
  },
  {
    text: "Space isn't remote at all. It's only an hour's drive away if your car could go straight upwards.",
    author: "Fred Hoyle"
  },
  {
    text: "The universe is not only stranger than we imagine, it is stranger than we can imagine.",
    author: "Sir Arthur Eddington"
  },
  {
    text: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    author: "Douglas Adams"
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine"
  },
  {
    text: "The stars are like the trees in the forest, alive and breathing. And they're watching me.",
    author: "Haruki Murakami"
  },
  {
    text: "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.",
    author: "Eagleson's Law"
  }
];

const RandomQuote: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    // Get random quote on load
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    
    // Trigger fade in
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
    
    // Change quote every 15 seconds
    const intervalId = setInterval(() => {
      setFadeIn(false);
      
      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[newIndex]);
        setFadeIn(true);
      }, 500);
    }, 15000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  if (!quote) return null;
  
  return (
    <div className="my-6 max-w-2xl mx-auto">
      <h3 className="text-sm font-orbitron text-cosmic-electric mb-2">Star Quotes</h3>
      <div 
        className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="text-cosmic-star text-sm italic">"{quote.text}"</p>
        <p className="text-cosmic-galaxy text-xs mt-1">— {quote.author}</p>
      </div>
    </div>
  );
};

export default RandomQuote;
