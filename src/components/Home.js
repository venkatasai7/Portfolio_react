import React, { useEffect } from 'react';
import Logo from './Logo';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import WordCloud from './WordCloud';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on mount
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });

    
  };

  return (
    <div>
      <Logo />
      <AboutMe />
      <Experience />
      <Projects direction="right" speed="slow" />
      <AboutMe />
      <WordCloud/>
      <AboutMe />
      <AboutMe />

      <button onClick={scrollToTop} style={{ opacity :'0.5',position: 'fixed', bottom: '20px', right: '20px', zIndex: '99' }}>
        <img src='../images/image.png' style={{ opacity :'1' ,width:"50px",height:"50px" }} alt=""/>
      </button>
    </div>
  );
};

export default Home;
