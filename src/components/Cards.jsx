import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center justify-center px-5 sm:px-20 lg:px-32 gap-5'>
      {/* First Card */}
      <div className='cardcontainer w-full sm:w-1/2 lg:w-1/3'>
        <div className='card relative rounded-xl w-full h-[50vh] sm:h-[60vh] bg-[#004D43] flex items-center justify-center'>
          <img className='w-32 sm:w-40 lg:w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt='' />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white'>&copy;2022 - 2025</button>
        </div>
      </div>

      {/* Second Card Group */}
      <div className='cardcontainer flex flex-col sm:flex-row gap-5 w-full sm:w-1/2 lg:w-2/3'>
        {/* Second Card */}
        <div className='card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-[50vh] sm:h-[60vh] bg-[#192826]'>
          <img className='w-32 sm:w-40 lg:w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt='' />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white'>&copy;2022 - 2025</button>
        </div>

        {/* Third Card */}
        <div className='card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-[50vh] sm:h-[60vh] bg-[#192826]'>
          <img className='w-32 sm:w-40 lg:w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt='' />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white'>&copy;2022 - 2025</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
