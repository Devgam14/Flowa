import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";
// The image imports are kept but not used in the final hero for a clean, centered look
const Header = () => {
  const boxref = useRef(null);
  useEffect(() => {
    let mm = gsap.matchMedia();

    // MatchMedia handles responsive animations
    mm.add("(min-width: 768px)", () => {
      if (boxref.current) {
        gsap.fromTo(
          boxref.current,
          {
            y: -10,
            x: 10,
            scale: -1,
            fontSize: "0.5rem",
            lineHeight: "0.5rem",
          },
          {
            y: 0,
            x: 0,
            scale: 1,
            fontSize: "2.8rem",
            lineHeight: "2.8rem",
            duration: 2,
            ease: "sine.out",
          }
        );
      }

      // Cleanup if media query stops matching
      return () => {
        if (boxref.current) {
          gsap.set(boxref.current, { clearProps: "all" });
        }
      };
    });

    // Optional: animations for smaller screens
    mm.add("(max-width: 767px)", () => {
      if (boxref.current) {
        gsap.fromTo(
          boxref.current,
          {
            y: -10,
            x: 10,
            scale: -1,
            fontSize: "0.5rem",
            lineHeight: "0.5rem",
          },
          {
            y: 0,
            x: 0,
            scale: 1,
            fontSize: "2.2rem",
            lineHeight: "2rem",
            duration: 2,
            ease: "sine.out",
          }
        );
      }

      return () => {
        if (boxref.current) {
          gsap.set(boxref.current, { clearProps: "all" });
        }
      };
    });

    // Cleanup MatchMedia on component unmount
    return () => mm.revert();
  }, []);
  return (
    <div className="h-screen  w-full bg-secondary">
      {/* The NavBar: Keeping the original structure but removing extra fluff
        to respect the request: "dont add anything on the nav bar only the pattern"
        The original pattern has the logo and a button.
      */}
      <nav
        className="w-full flex flex-row lg:justify-between justify-center fixed top-0 left-0 items-center lg:h-16  md:py-4 bg-secondary  
      backdrop-blur-lg border-b-2 border-primary z-10 lg:w-[90%] lg:ml-[5%]"
      >
        <div className="md:text-3xl  text-xl  lg:text-4xl font-goodly flex justify-center items-center w-fit px-5 py-2 ml-5">
          <span className="text-primary">Flo</span>
          <span className="text-secondary bg-primary px-1 ml-1 rounded-md text-3xl lg:text-4xl">
            wa
          </span>
        </div>
        <button
          className="bg-primary text-secondary font-goodly rounded-xl mr-5 text-lg lg:text-l h-10 lg:h-11 px-3 lg:px-3 transition duration-300 hover:opacity-80 shadow-md shadow-secondary hidden "
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          Secure Your Spot
        </button>
      </nav>
      {/* Hero Section: Centered content based on the Supabase screenshot. 
        It spans the whole screen, centers its content, and uses large, 
        contrasting text.
      */}
      <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-20 gap-4">
        {/* Main Heading Container (Used to house animation elements) */}
        <div
          className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-medium font-goodly text-accent overflow-hidden"
          ref={boxref}
        >
          {/* Heading Line 1 */}
          <h1 className="leading-tight">Business made simple with</h1>
          {/* Heading Line 2 (The primary text element) */}
          <h1 className="leading-tight">
            <span className="block text-primary mt-2 sm:mt-4">Flowa</span>
          </h1>
        </div>

        {/* Sub-Description */}
        <p
          // FIX 1: Simplified mobile text size from text-2xl to text-lg/xl
          // FIX 2: Removed manual <br /> tags for better fluidity on all screen sizes
          className="text-[0.8rem] lg:text-[1.1rem] text-gray-300 max-w-2xl  font-goodly mt-2"
        >
          Your WhatsApp. Your Data. Finally Clear. Flowa turns your business
          chats into insights, summaries, and smart records — so you can focus
          on growth, not scrolling.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-row space-x-4 items-center mt-4">
          <button
            // FIX 3: Removed conflicting bottom margins (mb-4 lg:mb-0 md:mb-0)
            className="bg-primary text-secondary font-medium rounded-lg text-lg px-6 font-goodly py-3 transition duration-300 transform hover:scale-[1.03] shadow-md shadow-secondary"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Join the waitlist
          </button>
        </div>

        {/* Footer/Trust Section - Now aligned naturally with Flexbox */}
        <div
          // FIX 4: Removed mt-[45%] and absolute/fixed positioning.
          // Now positioned at the bottom by the flex container's natural flow (or gap).
          // ADDED: pt-8 to create necessary separation from the button.
          className="w-full flex justify-center border-t border-secondary pt-8"
        >
          <p
            // FIX 5: Simplified font size
            className="font-medium text-sm sm:text-base px-3 tracking-normal text-primary text-center max-w-4xl"
          >
            Built for modern entrepreneurs who run their business through chat —
            and flow smarter with Flowa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
