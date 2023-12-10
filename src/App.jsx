import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listing from './components/Listing';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='home max-w-[1440px] min-h-screen mx-auto pt-4 px-4 sm:px-10 sm:pt-6 lg:pt-8 lg:px-20 xl:pt-10 xl:px-40'>
        <Navbar />
        <Hero />
        <Listing />
      </div>
      <Footer />
    </>
  );
};

export default App;
