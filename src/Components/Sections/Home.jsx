import { useEffect, useRef, useState } from "react";
import Resume from "/AbdulFawaz_Resume.pdf";
import profile from "../../assets/myphoto.jpg";
import { Download, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const greetings = [
  "Hello",
  "வணக்கம்",
  "ٱلسَّلَامُ عَلَيْكُمْ",
  "नमस्ते",
  "നമസ്കാരം",
  "ನಮಸ್ಕಾರ",
];

function Home() {
  const [index, setIndex] = useState(0);

  // Refs for animations
  const containerRef = useRef(null);
  const photoRef = useRef(null);
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const arrowRef = useRef(null);

  // Loop greeting
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate greetings separately
  useEffect(() => {
    gsap.fromTo(
      greetingRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [index]);

  // Animate all elements on scroll
  useEffect(() => {
    gsap.fromTo(
      [
        photoRef.current,
        greetingRef.current,
        titleRef.current,
        subtitleRef.current,
        descRef.current,
        buttonsRef.current,
        arrowRef.current,
      ],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-20 flex flex-col items-center px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-black -z-10 transition-colors duration-500"></div>
      <div className="absolute top-20 left-5 w-56 h-56 sm:w-72 sm:h-72 bg-purple-600/30 dark:bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-16 right-5 w-72 h-72 sm:w-96 sm:h-96 bg-pink-400/30 dark:bg-blue-500/15 rounded-full blur-3xl -z-10"></div>

      {/* Profile Image */}
      <img
        ref={photoRef}
        src={profile}
        alt="Profile"
        className="w-36 h-36 sm:w-44 sm:h-44 md:w-[175px] md:h-[175px] mt-7 rounded-full object-cover shadow-lg"
      />

      {/* Greeting */}
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 m-4 sm:m-5">
        <span
          ref={greetingRef}
          className="font-playfair text-xl sm:text-2xl font-semibold text-purple-600 inline-block"
        >
          {greetings[index]},
        </span>
        <span className="font-playfair text-xl sm:text-2xl font-semibold text-purple-600">
          I'm Fawaz!
        </span>
      </div>

      {/* Title */}
      <p
        ref={titleRef}
        className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent text-center px-2"
      >
        Full Stack Developer
      </p>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-lg sm:text-xl text-muted-foreground max-w-xl text-center mx-auto mt-4 dark:text-gray-200"
      >
        Specialized in{" "}
        <span className="text-purple-700 font-semibold">MERN Stack</span>{" "}
        development
      </p>

      {/* Description */}
      <p
        ref={descRef}
        className="text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-2 px-2 dark:text-gray-200"
      >
        I craft exceptional digital experiences using MongoDB, Express.js,
        React, and Node.js. Passionate about creating scalable, user-friendly
        applications that solve real-world problems.
      </p>

      {/* Buttons */}
      <div
        ref={buttonsRef}
        className="mt-7 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
      >
        <Button
          text="Download Resume"
          icon={<Download />}
          href={Resume}
          className="bg-purple-600 text-white rounded hover:bg-purple-700 w-52 text-center"
        />

        <Button
          text="View My Work"
          icon={<ChevronDown />}
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-transparent font-semibold text-[#4d4c4c] dark:text-gray-400 border-[0.7px] border-[#4d4c4c] dark:border-gray-500 rounded-md text-m hover:bg-[#f0f0f0] dark:hover:bg-gray-800/20 w-52 text-center"
        />
      </div>

      {/* Arrow */}
      <ChevronDown
        ref={arrowRef}
        className="h-8 w-8 sm:h-10 sm:w-10 mt-8 text-[#999] animate-bounce"
      />
    </section>
  );
}

export default Home;
