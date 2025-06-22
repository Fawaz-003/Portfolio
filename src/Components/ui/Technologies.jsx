// components/Technologies.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const techList = [
  "React", "Node.js", "MongoDB", "Express.js",
  "PHP", "MySQL", "Bootstrap", "Tailwind CSS", "HTML/CSS",
  "Docker", "AWS", "Git"
];

const Technologies = () => {
  const tagRef = useRef([]);

  useEffect(() => {
    tagRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
        Technologies I Work With
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {techList.map((tech, i) => (
          <span
            key={i}
            ref={(el) => (tagRef.current[i] = el)}
            className="px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-medium text-sm transition-all hover:scale-105 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
