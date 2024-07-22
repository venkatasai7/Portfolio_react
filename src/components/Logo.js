import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/Logo.css';

const Logo = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [logo, setLogo] = useState("Hola! I am Venkata Sai Kuniganti.");

  useEffect(() => {
    // Ensure `.aboutcontent` exists and is correctly referenced
    const triggerElement = document.querySelector(".aboutcontent");
    if (!triggerElement) {
      console.warn("Trigger element '.aboutcontent' not found.");
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top bottom",
        end: "top center",
        scrub: true,
        onUpdate: (self) => {
          setLogo(self.progress > 0.5 ? "Venkata Sai Kuniganti" : "Hola! I am Venkata Sai Kuniganti.");
        },
      },
    });

    tl.fromTo(
      ".logo",
      { y: "50vh", scale: 3, yPercent: -5 },
      { y: 0, scale: 1, yPercent: -5 }
    );

    // Cleanup scroll trigger
    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="items-left">
          <a className="a_nav" href="/">ABOUT</a>
          <a className="a_nav" href="/">RESUME</a>
        </div>
        <div className="items-right">
          <a className="a_nav" href="/">MAIL</a>
          <a className="a_nav" href="/">CONTACT</a>
        </div>
      </div>
      <div className="logo-logocontainer">
        <h1 className="logo">{logo}</h1>
      </div>
      <div className="logocontainer">
        {/* Add any additional content here if needed */}
      </div>
    </div>
  );
}

export default Logo;
