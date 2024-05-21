import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import magicStick from "./motionarteffect-img5.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PurchaseWand(props) {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation for text elements
    gsap.fromTo(
      [textRef.current.children],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    // Animation for button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    // Animation for image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="flex flex-col flex-wrap w-full mt-14">
      <div className="flex flex-col md:flex-row flex-wrap md:justify-evenly items-center">
        <div ref={textRef}>
          <p className="text-[#EEE5FF] text-[30px] md:text-[40px]">
            Turn Your Cursor Into A Colorful
          </p>
          <p className="text-[#EEE5FF] text-[30px] md:text-[40px]">
            Magic Wand & Charm Your Visitors
          </p>

          <p className="text-[#EEE5FFBD] md:text-[18px] mt-4">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse
          </p>
          <p className="text-[#EEE5FFBD] md:text-[18px]">
            your website with visually stunning motion art elements.
          </p>

          <p className="flex items-center justify-center w-full  md:flex-none md:justify-start md:text-start">
            <button
              ref={buttonRef}
              className="text-white text-[20px] mt-6 p-4 rounded-2xl px-12"
              style={{
                background:
                  "linear-gradient(90deg, #5E11FF 30%, #F87516 100%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              Purchase From Envato
              <FaArrowRightLong className="text-white ms-4 text-[20px]" />
            </button>
          </p>
        </div>
        <div ref={imageRef} className="mt-4 md:mt-0">
          <img src={magicStick} alt="magicStick" />
        </div>
      </div>
    </div>
  );
}
