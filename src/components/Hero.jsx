import React from "react";
import { Link } from "react-router-dom";
// import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] gap-4 w-full md:h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Quality, Freshness, Sustainability.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Earn, Grow & Feed the Nation!
        </h1>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          With an affordable entry fee and a rewarding compensation plan, we
          help members achieve financial success.
        </p>
        <Link to="/signup">
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
