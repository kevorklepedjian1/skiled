const Hero = () => {
  return (
    <header className='mt-[38px] sm:mt-24 lg:mt-44'>
      <div className='container flex mx-auto'>
        <div className='sm:max-w-[398px] md:max-w-md'>
          <h1 className='heading-lg lg:heading-xl mb-8 text-darkBlue'>Maximize skill, minimize budget</h1>
          <p className='sm:body-sm md:body-md text-gray mb-10'>
            Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life
            you want.
          </p>
          <div className='primaryGradient inline-block py-3 px-8 text-white rounded-3xl cursor-pointer hover:opacity-50'>
            <a href='#'>Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
