import React from 'react';

const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-4 w-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        👋 Hi Everyone!
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        I’m <span className="font-semibold">Parvej Husen Talukder</span> — welcome to my landing page!
      </p>
      <a
        href="#about"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
      >
        Learn More
      </a>
    </div>
        </div>
    );
};

export default Home;