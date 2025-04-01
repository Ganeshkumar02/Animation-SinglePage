import React from 'react';

function Featured() {
  return (
    <div data-scroll data-scroll-section className='w-full py-20'>
      {/* Featured Projects Title */}
      <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-5xl sm:text-6xl md:text-8xl tracking-tight text-center'>
          Featured Projects
        </h1>
      </div>

      <div className='px-5 sm:px-10 lg:px-20'>
        {/* Project Titles */}
        <div className='w-full flex flex-col sm:flex-row gap-5 items-center pt-10 mt-10 uppercase text-semibold'>
          <div className='w-full sm:w-1/2 flex gap-5 items-center'>
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            <h1 className='text-2xl sm:text-3xl'>Salience Labs</h1>
          </div>
          <div className='w-full sm:w-1/2 flex gap-5 items-center'>
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            <h1 className='text-2xl sm:text-3xl'>Cardboard Spaceship</h1>
          </div>
        </div>

        {/* Project Cards */}
        <div className='cards w-full flex flex-col sm:flex-row gap-10 mt-10'>
          {/* Card 1 */}
          <div className='cardcontainer relative w-full sm:w-1/2 h-[60vh] sm:h-[70vh] overflow-hidden group'>
            <div className='card w-full h-full overflow-hidden rounded-xl relative group'>
              {/* Image */}
              <img
                className='w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300'
                src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png'
                alt='FYDE'
              />
              {/* Overlay */}
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 group-hover:opacity-10 z-10 transition-opacity'></div>

              {/* Text inside the card */}
              <h1 className='absolute uppercase z-[20] text-[#CDEA68] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity'>
                {'Cardboard Spaceship'.split('').map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className='cardcontainer relative w-full sm:w-1/2 h-[60vh] sm:h-[70vh] overflow-hidden group'>
            <div className='card w-full h-full overflow-hidden rounded-xl relative group'>
              {/* Image */}
              <img
                className='w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300'
                src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png'
                alt='VICE'
              />
              {/* Overlay */}
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 group-hover:opacity-30 z-10 transition-opacity'></div>

              {/* Text inside the card */}
              <h1 className='absolute uppercase z-[20] text-[#CDEA68] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity'>
                {'Cardboard Spaceship'.split('').map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='px-5 sm:px-10 lg:px-20'>
        {/* Project Titles */}
        <div className='w-full flex flex-col sm:flex-row gap-5 items-center pt-10 mt-10 uppercase text-semibold'>
          <div className='w-full sm:w-1/2 flex gap-5 items-center'>
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            <h1 className='text-2xl sm:text-3xl'>AH2 & Matt Horn</h1>
          </div>
          <div className='w-full sm:w-1/2 flex gap-5 items-center'>
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            <h1 className='text-2xl sm:text-3xl'>FYDE</h1>
          </div>
        </div>

        {/* Project Cards */}
        <div className='cards w-full flex flex-col sm:flex-row gap-10 mt-10'>
          {/* Card 1 */}
          <div className='cardcontainer relative w-full sm:w-1/2 h-[60vh] sm:h-[70vh] overflow-hidden group'>
            <div className='card w-full h-full overflow-hidden rounded-xl relative group'>
              {/* Image */}
              <img
                className='w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300'
                src='https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png'
                alt='FYDE'
              />
              {/* Overlay */}
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 group-hover:opacity-30 z-10 transition-opacity'></div>

              {/* Text inside the card */}
              <h1 className='absolute z-[20] text-[#CDEA68] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity'>
                {'AH2 & Matt Horn'.split('').map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className='cardcontainer relative w-full sm:w-1/2 h-[60vh] sm:h-[70vh] overflow-hidden group'>
            <div className='card w-full h-full overflow-hidden rounded-xl relative group'>
              {/* Image */}
              <img
                className='w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300'
                src='https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png'
                alt='VICE'
              />
              {/* Overlay */}
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 group-hover:opacity-30 z-10 transition-opacity'></div>

              {/* Text inside the card */}
              <h1 className='absolute z-[20] text-[#CDEA68] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity'>
                {'FYDE'.split('').map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Featured;
