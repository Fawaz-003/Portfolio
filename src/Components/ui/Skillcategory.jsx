// components/SkillCategory.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Skillcategory({ title, skills }) {
  const containerRef = useRef(null);
  const barRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );

    barRefs.current.forEach((bar, index) => {
      const percent = parseInt(skills[index].level);
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${percent}%`,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 95%",
          },
        }
      );
    });
  }, [skills]);

  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-[#1a1d2b] border border-purple-300/30 dark:border-purple-600/40 p-6 rounded-xl shadow-md w-full sm:w-[90%] max-w-[350px] mx-auto hover:shadow-purple-300/30 dark:hover:shadow-purple-500/20 transition-all"
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="flex justify-between mb-1 text-sm text-gray-700 dark:text-gray-300">
              <span>{skill.name}</span>
              <span className="text-purple-600 font-semibold">{skill.level}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                ref={(el) => (barRefs.current[index] = el)}
                className="h-full rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-400"
                style={{ width: "0%" }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skillcategory;
