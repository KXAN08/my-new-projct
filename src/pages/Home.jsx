import React from 'react';

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-opacity-50 p-10 rounded text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to DevConnector</h1>
        <p className="text-xl text-white">
          Connect with developers all around the world!
        </p>
      </div>
    </div>
  );
};

export default Home;
