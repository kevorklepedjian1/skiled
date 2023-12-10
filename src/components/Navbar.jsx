import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='container flex items-center justify-between mx-auto w-full'>
        <img src='../assets/logo-dark.svg' alt='Dark Logo' className='' />
        <div className='inline-block py-3 px-8 bg-darkBlue text-white rounded-3xl cursor-pointer hover:bg-lightBlue '>
          <a >Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
