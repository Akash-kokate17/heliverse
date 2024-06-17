import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MotionThought(props) {
  const gradientStyle = {
    background: "linear-gradient(90deg, #5E11FF 30%, #F87516 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );

    // Additional animation for the specific text elements
    gsap.fromTo(
      textRef.current.querySelectorAll(".additional-animation"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <div className="flex flex-col flex-wrap w-full mt-12">
      <div className="flex flex-col md:flex-row flex-wrap w-full">
        <div className="md:ml-36 text-center md:text-start" ref={textRef}>
          <div className="mt-3">
            <span className="text-xl" style={gradientStyle}>
              Transform
            </span>{" "}
            <br />
            <span className="text-xl" style={gradientStyle}>
              Your Website
            </span>
          </div>
          <div className="mt-3">
            <span className="text-[#EEE5FF] text-xl">With Motion Art</span>
            <br />
            <span className="text-[#EEE5FF] text-xl">Effect</span>
          </div>
        </div>
        <div className="flex flex-col flex-wrap text-center justify-center md:ml-[200px] mt-8 md:mt-0">
          <p className="text-[#EEE5FF] md:text-[70px] text-[40px] md:mr-40 md:h-[90px] additional-animation">
            Attract Your
          </p>
          <p className="text-[#EEE5FF] md:text-[70px] text-[40px] md:h-[90px] additional-animation">
            Visitors Attention
          </p>
          <span className="text-[#EEE5FF] md:text-[70px] text-[40px] md:h-[90px] additional-animation md:text-start">
            With Colorful
          </span>
          <span style={gradientStyle} className="md:text-[70px] text-[40px] md:h-[90px] additional-animation">
            Motion Art Effect
          </span>
        </div>
        <div className="flex flex-col flex-wrap items-center w-full text-[#EEE5FFBD] mt-8">
          <div className="md:w-[500px] md:mr-10 text-center md:text-start">
            <p className="additional-animation">
              Unleash the power of creativity with Motion Art for Elementor - your
            </p>
            <span className="additional-animation">
              ultimate solution for seamlessly integrating captivating animations into
            </span>
            <span className="additional-animation"> your website.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
