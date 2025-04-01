import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='fixed z-[999] w-full px-5 sm:px-10 md:px-20 py-5 flex justify-between items-center bg-zinc-900 text-white'>
      {/* Logo */}
      <div className='logo'>
        <img className='w-[6vw] h-[6vw] rounded-full hover:scale-110 transition-all duration-300' src='/src/assets/img/ganesh_photo-.jpg' alt="Logo" />
      </div>
      <div className='hidden lg:flex gap-10 items-center'>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg font-light capitalize ${index === 4 && "ml-32"}`}>
            {item}
          </a>
        ))}
      </div>
      <div className="lg:hidden flex items-center cursor-pointer" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className={`text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-zinc-800 bg-opacity-90 flex flex-col items-center justify-center space-y-5">
          {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
            <a
              key={index}
              className="text-2xl font-light capitalize text-white"
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
