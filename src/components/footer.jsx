import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Countdown: Set your launch date here (YYYY, MM - 1, DD)
  const launchDate = new Date(2025, 10, 30).getTime();

  useEffect(() => {
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send email to backend or Supabase
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#1b211c] text-accent text-center px-4">
      <h1 className="text-4xl md:text-6xl font-medium mb-4 font-goodly">
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

      {/* Waitlist Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-72 sm:w-80 outline-none bg-[#2b352d] text-[#e3f2da] focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all"
          >
            Join Waitlist
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
