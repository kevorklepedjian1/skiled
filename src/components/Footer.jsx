import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-darkBlue min-w-full flex items-center justify-between mt-20 px-4 py-9 md:mt-36 md:py-8 md:px-10 lg:px-20 xl:px-40'>
      <div>
        <img src='../assets/logo-light.svg' alt='Light Logo' />
      </div>
      <div className='secondaryGradient inline-block py-3 px-8 text-white rounded-3xl cursor-pointer '>
        <a href='#'>Get Started</a>
      </div>
    </footer>
  );
};

export default Footer;
