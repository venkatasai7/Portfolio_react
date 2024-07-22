import React, { useEffect, useState } from 'react';
import "../Styles/Logo.css";

const Logo = () => {
    const [logo, setLogo] = useState("Hola! I am Venkata Sai Kuniganti.");

    useEffect(() => {
        console.log('GSAP:', window.gsap);
        console.log('ScrollTrigger:', window.gsap?.ScrollTrigger);

        const tl = window.gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutcontent",
                start: "top bottom",
                end: "top center",
                scrub: true,

                onUpdate: (self) => {
                    if (self.progress > 0.5) {
                        setLogo("Venkata Sai Kuniganti");
                    } else {
                        setLogo("Hola! I am Venkata Sai Kuniganti.");
                    }
                },
            },
        });

        tl.fromTo(
            ".logo",
            {
                y: "50vh",
                scale: 3,
                yPercent: -5,
            },
            {
                y: 0,
                scale: 1,
                yPercent: -5,
            }
        );
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
            </div>
        </div>
    );
}

export default Logo;
