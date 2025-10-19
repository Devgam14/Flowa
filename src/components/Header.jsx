import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";
// The image imports are kept but not used in the final hero for a clean, centered look
const Header = () => {
  const boxref = useRef(null);
  useEffect(() => {
    console.log(boxref.current);
    if (boxref.current) {
      gsap.fromTo(
        boxref.current,
        { y: -10, x: 10, scale: -1, fontSize: "0.5rem", lineHeight: "0.5rem" },
        {
          y: 0,
          x: 0,
          duration: 2,
          scale: 1,
          ease: "sine.out",
          fontSize: "3.5rem",
          lineHeight: "2.8rem",
        }
      );
    }
  }, []);
  return (
    <div className="h-screen  w-full bg-secondary">
      {/* The NavBar: Keeping the original structure but removing extra fluff
        to respect the request: "dont add anything on the nav bar only the pattern"
        The original pattern has the logo and a button.
      */}
      |lkjb
      <nav
        className="w-full flex flex-row justify-between py-2 fixed top-0 left-0 items-center lg:h-16 md:py-4 bg-secondary 
      backdrop-blur-lg border-b-2 border-primary z-10 lg:w-[90%] lg:ml-[5%]"
      >
        <div className="text-2xl lg:text-4xl font-goodly flex justify-center items-center w-fit px-5 py-2 ml-5">
          <span className="text-primary">Flo</span>
          <span className="text-secondary bg-primary px-1 ml-1 rounded-md text-3xl lg:text-4xl">
            wa
          </span>
        </div>
        <button className="bg-primary text-secondary font-goodly rounded-xl mr-5 text-lg lg:text-l h-10 lg:h-11 px-3 lg:px-3 transition duration-300 hover:opacity-80 shadow-md shadow-secondary">
          Secure Your Spot
        </button>
      </nav>
      {/* Hero Section: Centered content based on the Supabase screenshot. 
        It spans the whole screen, centers its content, and uses large, 
        contrasting text.
      */}
      <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-medium font-goodly text-accent  mt-[8vh] lg:mt-[-10vh]"
          ref={boxref}
        >
          {/* 'Build in a weekend' style */}
          Business made simple with
          {/* 'Scale to millions' style with the green highlight */}
          <span className="block text-primary mt-2 sm:mt-4">Flowa</span>
        </h1>

        {/* Sub-Description */}
        <p className="lg:text-[1.1rem] text-2xl md:text-2xl text-gray-300 max-w-2xl mt-6 sm:mt-8  leading-relaxed font-goodly">
          Flowa is where business meets precision. We turn complex
          administrative systems into seamless digital flows that move with
          clarity and purpose. Every process becomes smarter, every decision
          sharper, and growth feels natural. With Flowa, transformation isn’t
          disruption — it’s progress refined.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-row space-x-4 mt-8  items-center">
          <button className="bg-primary text-secondary font-medium rounded-lg text-lg px-6  font-goodly py-3 transition duration-300 transform hover:scale-[1.03] shadow-md shadow-secondary ">
            Join the waitlist
          </button>
        </div>

        {/* Logos/Trust Section - Simulating the bottom part of the screenshot */}
        <div className="absolute bottom-0 w-full flex justify-center  py-6 lg:py-6 border-t border-secondary">
          <p className="text-sm text-gray-600 space-x-6">
            <span>Client A</span>
            <span>Client B</span>
            <span>Client C</span>
            <span>Client D</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
