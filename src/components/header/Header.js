import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import motionArtLogo from './MotionArtEffect-logo.png';

export default function Header(props) {
  const logoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation for logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animation for button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="flex flex-col flex-wrap w-full h-[73px] mt-10">
      <div className="flex flex-row w-full justify-around">
        <div className="md:me-[600px] cursor-pointer" ref={logoRef}>
          <img src={motionArtLogo} alt="motionArtLogo" />
        </div>
        <div ref={buttonRef}>
          <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
          <button className="text-[#0D051f] p-2 px-4 md:p-4 md:px-10 rounded-md bg-white hover:bg-transparent hover:text-white hover:border-2 hover:border-white">
            Purchase Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
