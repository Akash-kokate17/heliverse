import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AllBrowse from './motionarteffect-img8.png';

gsap.registerPlugin(ScrollTrigger);

export default function AllBrowsers(props) {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textElements = textRef.current;
    const imageElement = imageRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      textElements,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );

    tl.fromTo(
      imageElement,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      },
      "-=0.5" // Offset the image animation by 0.5 seconds after the text animation
    );

    // Set up ScrollTrigger for the section
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      onEnter: () => tl.play(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center w-full mt-10 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <div className="flex flex-col items-center justify-center md:w-[1240px] w-full md:h-[286px] h-[290px] rounded-xl p-10 md:p-0" style={{ background: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)" }}>
          <p ref={(el) => textRef.current[0] = el} className="text-[25px] text-[#EEE5FF] w-full">Supported by All Popular Browsers</p>
          <p ref={(el) => textRef.current[1] = el} className="text-[16px] text-[#EEE5FFBD] mt-5">Rest assured, Motion Art is designed to be compatible</p>
          <p ref={(el) => textRef.current[2] = el} className="text-[16px] text-[#EEE5FFBD]">with all major web browsers.</p>
          <div ref={imageRef} className="flex items-center justify-center mt-5">
            <img src={AllBrowse} alt="allBrowser" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
