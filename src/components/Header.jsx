import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const boxref = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop / Tablet animation
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
            lineHeight: "2.3rem",
            duration: 2,
            ease: "sine.out",
          }
        );
      }

      return () => gsap.set(boxref.current, { clearProps: "all" });
    });

    // Mobile animation
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

      return () => gsap.set(boxref.current, { clearProps: "all" });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-secondary flex flex-col">
      {/* ✅ Navbar */}
      <nav className="w-full flex flex-row lg:justify-between justify-center items-center fixed top-0 left-0 bg-secondary border-b-2 border-primary backdrop-blur-lg z-10 px-5 py-3 lg:py-4 lg:w-[90%] lg:ml-[5%]">
        <div className="text-xl md:text-3xl lg:text-4xl font-goodly flex justify-center items-center">
          <span className="text-primary">Flo</span>
          <span className="text-secondary bg-primary px-1 ml-1 rounded-md text-3xl lg:text-4xl">
            wa
          </span>
        </div>

        <button
          className="bg-primary text-secondary font-goodly rounded-xl text-lg h-10 lg:h-11 px-4 transition duration-300 hover:opacity-80 shadow-md shadow-secondary hidden lg:block"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Secure Your Spot
        </button>
      </nav>

      {/* ✅ Hero Section */}
      <div className="flex flex-col justify-center items-center text-center px-5 pt-28 pb-10 flex-grow">
        <div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-goodly text-accent"
          ref={boxref}
        >
          <h1 className="leading-tight">
            Business made simple with
            <span className="block text-primary mt-2 sm:mt-4">Flowa</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mt-5 font-goodly">
          Your WhatsApp. Your Data. Finally Clear. Flowa turns your business
          chats into insights, summaries, and smart records — so you can focus
          on growth, not scrolling.
        </p>

        <div className="flex flex-row space-x-4 items-center mt-6">
          <button
            className="bg-primary text-secondary font-medium rounded-lg text-lg px-6 font-goodly py-3 transition duration-300 transform hover:scale-[1.03] shadow-md shadow-secondary"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Join the waitlist
          </button>
        </div>
      </div>

      {/* ✅ Footer Section */}
      <div className="w-full flex justify-center border-t border-secondary py-6">
        <p className="font-medium text-sm sm:text-base px-3 tracking-normal text-primary text-center max-w-4xl">
          Built for modern entrepreneurs who run their business through chat —
          and flow smarter with Flowa.
        </p>
      </div>
    </div>
  );
};

export default Header;
