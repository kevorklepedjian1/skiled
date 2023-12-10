import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='container flex items-center justify-between mx-auto w-full'>
        <img src='../assets/logo-dark.svg' alt='Dark Logo' className='' />
        <div className='inline-block lg:py-3 lg:px-8 md:py-3 md:px-8 bg-darkBlue text-white rounded-3xl cursor-pointer hover:bg-lightBlue sm:py-1 sm:px-2'>
          <a >Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
