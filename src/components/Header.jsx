import React from "react";
import img1 from "../assets/img3.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img1.svg";
const Header = () => {
  return (
    <div className="h-screen w-full bg-black">
      <div className="w-full flex flex-row justify-between py-2  fixed top-0 left-0 items-center lg:h-16 backdrop-blur-lg border-b-2 border-primary">
        <div className="text-5xl font-goodly flex justify-center items-center w-fit px-5 py-2 ml-5">
          <span className="text-primary">Flo</span>
          <span className="text-secondary bg-primary px-2 ml-1 rounded-md">
            wa
          </span>
        </div>
        <button className="bg-secondary text-primary  font-goodly rounded-xl mr-5  text-xl h-11 px-2">
          Register Now
        </button>
      </div>
      <div className="w-ful h-screen flex flex-row">
        <div className="w-1/2 bg-secondary p-8 flex flex-col items-center h-screen ">
          {/* Image Container for Horizontal Spacing */}
          <div className="w-full pt-3">
            <img src={img1} className="w-1/2" alt="Digital Presentation Bro" />
          </div>
          <div className="w-full ">
            <img
              src={img2}
              className="w-[40%] float-right"
              alt="Digital Presentation Pana"
            />
          </div>
          <div className="w-full">
            <img
              src={img3}
              className="w-1/2 float-left" // Also changed to w-1/3 for consistency
              alt="Digital Presentation Pana 1"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center h-screen ">
          <header className="py-20 px-2 flex flex-col items-center ">
            <h1 className="text-4xl font-goodly text-white">
              Bussiness made simple with{" "}
              <span className="bg-[#C7D59F] px-2 rounded-md text-[#40531A]">
                Flowa
              </span>
            </h1>
            <button className="w-fit p-2 mt-2 bg-secondary border-primary text-primary border-2 ">
              Register now
            </button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
