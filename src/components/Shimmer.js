// Shimmer.js
import React from 'react';
import ShimmerCard from './ShimmerCard';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center relative top-[10%] md:left-[8%] left-[2%]">
      <div className="inline-block md:hidden">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
      <div className="justify-center hidden md:flex">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
       
      </div>
      <div className="justify-center hidden md:flex">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        
      </div>
      <div className="justify-center hidden md:flex">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        
      </div>
    </div>
  );
};

export default Shimmer;
