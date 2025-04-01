import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouse = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouse - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div 
                data-scroll 
                data-scroll-speed="-.7" // Slower scroll for the background
                className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
            >
                <div className='absolute flex gap-5 md:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {/* Left Eye */}
                    <div className='flex items-center justify-center w-[25vw] sm:w-[18vw] md:w-[15vw] lg:w-[12vw] h-[25vw] sm:h-[18vw] md:h-[15vw] lg:h-[12vw] rounded-full bg-zinc-100'>
                        <div className='relative flex items-center justify-center w-2/3 h-2/3 bg-zinc-950 rounded-full'>
                            <div 
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                                className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
                            >
                                <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    {/* Right Eye */}
                    <div className='flex items-center justify-center w-[25vw] sm:w-[18vw] md:w-[15vw] lg:w-[12vw] h-[25vw] sm:h-[18vw] md:h-[15vw] lg:h-[12vw] rounded-full bg-zinc-100'>
                        <div className='relative flex items-center justify-center w-2/3 h-2/3 bg-zinc-950 rounded-full'>
                            <div 
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                                className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
                            >
                                <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
