import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { supabase } from "../supabase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});
  // Set initial loading state to FALSE since the component is ready
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const textElement = useRef(null);
  const enterbutton = useRef(null);
  const launchDate = new Date(2025, 10, 30).getTime();

  const handleInputChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // ... GSAP and Countdown logic remains the same ...
    const textelement = textElement.current;
    if (textelement) {
      const textarray = textelement.textContent.split("");
      textelement.innerHTML = textarray
        .map((letter) => `<span>${letter}</span>`)
        .join("");

      gsap.fromTo(
        textelement.querySelectorAll("span"),
        { opacity: 0, y: -50 },
        {
          x: 0,
          opacity: 1,
          rotation: 10,
          ease: "elastic.out(1, 0.3)",
          duration: 3,
          stagger: 0.05,
          scrollTrigger: {
            trigger: textelement,
            start: "top center",
            toggleActions: "play none reverse reverse",
          },
        }
      );
    }

    const submitButton = enterbutton.current;
    if (submitButton) {
      gsap.fromTo(
        submitButton,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: submitButton,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ expired: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formdata.name || !formdata.email) {
      setError("Please provide both name and email.");
      return;
    }

    // FIX 1: Set loading state to TRUE before the async operation
    setLoading(true);

    const { data, error: supabaseError } = await supabase
      .from("waitlist")
      .insert([{ name: formdata.name, email: formdata.email }]);

    // FIX 2: Set loading state to FALSE in ALL exit paths
    setLoading(false);

    if (supabaseError) {
      console.error("Error inserting data:", supabaseError.message);
      setError("Subscription failed. Please try again.");
    } else {
      console.log("Success! Data inserted:", data);
      setFormdata({ name: "", email: "" });
      setSubmitted(true);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#1b211c] text-accent text-center px-4">
      {/* ... H1 and P tags remain the same ... */}
      <h1
        className="text-4xl md:text-5xl font-medium mb-4 font-goodly"
        ref={textElement}
      >
        Flowa is almost here
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-10">
        We’re perfecting the flow — making business simpler, smarter, and
        seamless. Get early access before launch.
      </p>

      {/* Countdown Timer */}
      {timeLeft.expired ? (
        <p className="text-2xl text-green-400 mb-8">We’re live! 🚀</p>
      ) : (
        <div className="flex gap-6 text-center mb-10">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit}>
              <p className="text-4xl font-bold text-green-400">
                {timeLeft[unit] ?? "00"}
              </p>
              <p className="uppercase text-sm tracking-widest">{unit}</p>
            </div>
          ))}
        </div>
      )}

      {/* Error Message Display */}
      {error && <p className="text-red-500 mb-4 font-medium">{error}</p>}

      {/* Waitlist Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 items-center"
        >
          <input
            type="text"
            name="name"
            required
            value={formdata.name}
            onChange={handleInputChange}
            placeholder="Pls enter your name"
            className="px-4 py-2 rounded-md w-72 sm:w-80 outline-none bg-[#2b352d] text-[#e3f2da] focus:ring-2 focus:ring-green-500"
            disabled={loading} // IMPROVEMENT: Disable inputs while loading
          />
          <input
            type="email"
            name="email"
            required
            value={formdata.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-72 sm:w-80 outline-none bg-[#2b352d] text-[#e3f2da] focus:ring-2 focus:ring-green-500"
            disabled={loading} // IMPROVEMENT: Disable inputs while loading
          />
          <button
            type="submit"
            ref={enterbutton}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all disabled:opacity-50" // IMPROVEMENT: Styling for disabled button
            disabled={loading} // IMPROVEMENT: Disable button while loading
            // REMOVED: The flawed onClick handler
          >
            {loading ? "Submitting..." : "Join Waitlist"}
            {/* IMPROVEMENT: Dynamically set button text using ternary operator */}
          </button>
        </form>
      ) : (
        <p className="text-green-400 font-medium text-lg">
          You’re on the list! We’ll notify you when Flowa launches.
        </p>
      )}
    </section>
  );
};

export default ComingSoon;
