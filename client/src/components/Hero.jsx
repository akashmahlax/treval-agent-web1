import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero-btn",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  return (
    <header className="hero min-h-screen bg-gradient-to-br from-primary to-accent dark:from-dark dark:to-primary flex flex-col justify-center items-center text-center text-white">
      <h1 className="hero-text text-5xl md:text-6xl font-extrabold mb-6">
        Discover Punjab with <span className="text-accent">Vinay Harri Travels</span>
      </h1>
      <p className="hero-text text-lg md:text-xl max-w-2xl mb-6">
        Experience the vibrant culture, stunning landscapes, and timeless heritage of Punjab with our expertly tailored travel packages.
      </p>
      <button className="hero-btn px-8 py-3 bg-white text-primary dark:text-dark font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Plan Your Journey
      </button>
    </header>
  );
};

export default Hero;
