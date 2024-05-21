import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from GSAP
import section from './motionarteffect-img11.png';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ApplyOn(props) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    // Create animations using GSAP's ScrollTrigger
    gsap.fromTo(
      section1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top 80%', // Start the animation when the top of the section is 80% in view
          end: 'bottom 20%', // End the animation when the bottom of the section is 20% in view
          scrub: true, // Smoothly animate as the user scrolls
        },
      }
    );

    gsap.fromTo(
      section2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col flex-wrap w-full mt-32">
      <div className="flex flex-col">
        <p className="w-full text-center text-[#EEE5FF] text-[40px]">Apply On Any Section Or Enable</p>
        <p className="w-full text-center text-[#EEE5FF] text-[40px]">For Whole Page</p>
      </div>
      <div className="md:flex items-center justify-center m-5">
        <div ref={section1Ref} className="md:w-[610px] md:h-[561px] rounded-xl p-8" style={{ background: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)" }}>
          <p className="text-[#EEE5FF] text-[25px]">Apply On Section</p>
          <p className="text-[#EEE5FFBD] text-[16px] mt-4">Apply on section is a game-changer, offering an unparalleled way to</p>
          <p className="text-[#EEE5FFBD] text-[16px] mt-1">manage applications directly from your website.</p>
          <img src={section} alt="applyOnSection" className="w-full mt-8" />
        </div>
        <div ref={section2Ref} className="md:w-[610px] md:h-[561px] rounded-xl p-8 mt-10 md:mt-40 md:ms-6" style={{ background: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)" }}>
          <p className="text-[#EEE5FF] text-[25px]">Apply On Section</p>
          <p className="text-[#EEE5FFBD] text-[16px] mt-4">Apply on section is a game-changer, offering an unparalleled way to</p>
          <p className="text-[#EEE5FFBD] text-[16px] mt-1">manage applications directly from your website.</p>
          <img src={section} alt="applyOnSection" className="w-full mt-8" />
        </div>
      </div>
    </div>
  );
}
