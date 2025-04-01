import React from 'react';

function About() {
  return (
    <div className='w-full p-5 sm:p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font["Neue_Montreal"] text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] leading-[5vw] sm:leading-[3.5vw] md:leading-[3vw] lg:leading-[2.5vw] tracking-tight'>
      Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className="w-full flex flex-col sm:flex-row gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className='w-full sm:w-1/2'>
          <h1 className='text-[4vw] sm:text-7xl leading-tight'>Our approach.</h1>
          <button className='px-6 sm:px-10 py-3 sm:py-5 mt-10 flex uppercase gap-6 items-center bg-zinc-900 rounded-full text-white'>
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-full sm:w-1/2 h-[40vh] sm:h-[70vh] rounded-3xl overflow-hidden'>
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Our approach"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
