import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "./motionarteffect-img9.png";
import img2 from "./motionarteffect-img7.png";
import img3 from "./motionarteffect-img6.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Features(props) {
  const titleRef = useRef([]);
  const descriptionRef = useRef([]);
  const featuresRef = useRef([]);

  useEffect(() => {
    // Animate titles
    titleRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate descriptions
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate feature cards
    featuresRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap w-full mt-28">
        <div className="flex flex-col flex-wrap w-full text-center">
          <p
            ref={(el) => (titleRef.current[0] = el)}
            className="text-[#EEE5FF] text-[40px]"
          >
            An All-Round Plugin With
          </p>
          <p
            ref={(el) => (titleRef.current[1] = el)}
            className="text-[#EEE5FF] text-[40px]"
          >
            Powerful Features
          </p>

          <div ref={descriptionRef}>
            <p className="text-[16px] text-[#EEE5FFBD] mt-4">
              Whether you're a seasoned web designer or just starting out, Motion
              Art for
            </p>
            <p className="text-[16px] text-[#EEE5FFBD] mt-1">
              Elementor seamlessly integrates with the Elementor platform,
              providing you
            </p>
            <p className="text-[16px] text-[#EEE5FFBD] mt-1">
              with a seamless and intuitive experience.
            </p>
          </div>
        </div>
        <div className="flex md:row flex-wrap w-full items-center justify-center gap-5 mt-8">
          {[
            {
              img: img1,
              title: "Light Weight",
              desc: ["Motion Art for Elementor is designed to be", "lightweight."],
            },
            {
              img: img2,
              title: "100% Responsive",
              desc: ["Create a consistent visual experience", "across all devices."],
            },
            {
              img: img3,
              title: "User Friendly Interface",
              desc: ["Ensure a smooth experience for both", "applicants and administrators."],
            },
          ].map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="w-[399px] h-[376px] rounded-xl p-5"
              style={{ background: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)" }}
            >
              <div>
                <img src={feature.img} alt={`img${index + 1}`} className="text-start" />
              </div>
              <p className="text-[25px] text-[#EEE5FF] mt-5">{feature.title}</p>
              {feature.desc.map((line, idx) => (
                <p key={idx} className="text-[16px] text-[#EEE5FFBD] mt-2">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
