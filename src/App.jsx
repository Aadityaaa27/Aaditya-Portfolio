import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>

      <div className='fixed inset-0 z-10'>
        <div className="relative h-full w-full bg-black">

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>


          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#fbfbfb36_0%,#000_100%)]"></div>
        </div>
      </div>


      <div className='relative z-20 container mx-auto px-4 py-8'>
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;


