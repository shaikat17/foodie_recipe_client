import React from 'react';

const CookTogether = () => {
    return (
        <div className="cooktogether-container my-10">
      <div
        className="cooktogether-content p-10 text-center"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%), url(https://img.freepik.com/premium-photo/crop-couple-cooking-salad-together_23-2148114200.jpg)',
          backgroundPosition: 'right',
          backgroundSize: 'cover'
        }}
      >
        <h1 className="text-4xl font-bold">Let's Cook Together!</h1>
        <button className="px-4 py-2 mt-4 bg-red-500 text-white text-lg rounded">
          Start Cooking
        </button>
      </div>
    </div>
    );
  }

export default CookTogether;