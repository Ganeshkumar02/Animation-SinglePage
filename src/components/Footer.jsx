import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row gap-5 w-full bg-zinc-900 p-5 min-h-[40vh] md:min-h-[50vh]'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 h-auto flex flex-col justify-between font-serif'>
        <div className='heading'>
          <h1 className='text-[8vw] md:text-[5vw] font-semibold uppercase leading-tight -mb-2 md:-mb-4'>
            Eye-
          </h1>
          <h1 className='text-[8vw] md:text-[5vw] font-semibold uppercase leading-tight -mb-2 md:-mb-4'>
            Opening
          </h1>
        </div>
        <h1>&copy; ochi.design.come</h1>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2'>
        <h1 className='text-[8vw] md:text-[5vw] font-semibold uppercase leading-tight -mb-8'>
          Presentations
        </h1>
        <div className="dets font-serif mt-8 md:mt-16">
          <a className='block text-xl font-light' href="#">Facebook</a>
          <a className='block text-xl font-light' href="#">Instagram</a>
          <a className='block text-xl font-light' href="#">Twitter</a>
        </div>
        <div className='w-full pt-40 '>
          <h1 className='flex items-center justify-center'>Develop By :- Prince Pal  +91,7388610478 </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
