import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-28 sm:mt-40 md:mt-52 px-5 sm:px-10 lg:px-20">
        {["We Create", "Eye Opening", "Presentions"].map((item, index) => {
          return (
            <div className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && 
                (<motion.div 
                  initial={{width: 0}} 
                  animate={{width:"8vw"}} 
                  transition={{ease:[0.76, 0, 0.24, 1], duration: 1 }} 
                  className='mr-[1vw] w-[8vw] rounded-md h-[5vw] -top-[0.5vw] relative bg-red-500'>
                </motion.div>
                )}
                <h1 className='uppercase text-[7vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] h-full leading-[7vw] sm:leading-[10vw] md:leading-[7vw] lg:leading-[6vw] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-10 sm:mt-12 md:mt-20 flex flex-col sm:flex-row justify-between items-center py-5 px-5 sm:px-10 lg:px-20'>
        {[ 
          "For public and private companies", 
          "From the first pitch to IPO"
        ].map((item, index) => (
          <p className='text-md font-light tracking-tight leading-none sm:text-lg md:text-xl'>
            {item}
          </p>
        ))}

        <div className='start flex flex-col sm:flex-row gap-5 items-center mt-5 sm:mt-0'>
          <div className='px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase'>
            start the project
          </div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
