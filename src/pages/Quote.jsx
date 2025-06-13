import React, { useState } from "react";

function Quote() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Unknown",
    },
    {
      text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas Edison",
    },
    {
      text: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-red-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
          Inspirational Quote
        </h1>

        <p className="text-xl italic text-gray-700 mb-4">
          “{quotes[index].text}”
        </p>
        <span className="block text-gray-500 text-sm mb-4">
          – {quotes[index].author}
        </span>

        <button
          onClick={handleNext}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-200"
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
