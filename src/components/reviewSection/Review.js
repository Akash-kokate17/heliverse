import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from './motionarteffect-img2.png';
import stars from './motionarteffect-img4.png';
import secondReview from './motionarteffect-img1.png';
import thirdReview from './motionarteffect-img3.png';

export default function Review(props) {
  const logoRef = useRef(null);
  const starsRef = useRef(null);
  const reviewRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for logos and reviews
    gsap.fromTo(
      [logoRef.current, ...reviewRefs.current],
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for stars
    gsap.fromTo(
      starsRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: starsRef.current,
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-wrap flex-col w-full">
      <div className="flex flex-col w-full">
        <p className="text-center w-full text-[#EEE5FF] text-[22px] mt-20">
          Trusted by thousands of users around the world
        </p>
        <div className="flex w-full flex-col md:flex-row text-center items-center justify-evenly mt-16">
          <div className="flex items-center mb-12" ref={(el) => reviewRefs.current[0] = el}>
            <div>
              <img src={logo1} alt="logo" className="w-[88px] h-[88px]" ref={logoRef} />
            </div>
            <div className="ms-3">
              <img src={stars} alt="start1" className="w-[155px] h-[20px]" ref={starsRef} />
              <p className="text-[#EEE5FFBD] h-[22px] w-[155px] mt-4">4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="flex items-center mb-12" ref={(el) => reviewRefs.current[1] = el}>
            <div>
              <img src={secondReview} alt="logo" className="w-[88px] h-[88px]" />
            </div>
            <div className="ms-3">
              <img src={stars} alt="start2" className="w-[155px] h-[20px]" />
              <p className="text-[#EEE5FFBD] h-[22px] w-[155px] mt-4">4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="flex items-center mb-12" ref={(el) => reviewRefs.current[2] = el}>
            <div>
              <img src={thirdReview} alt="logo" className="w-[88px] h-[88px]" />
            </div>
            <div className="ms-3">
              <img src={stars} alt="start3" className="w-[155px] h-[20px]" />
              <p className="text-[#EEE5FFBD] h-[22px] w-[155px] mt-4">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
