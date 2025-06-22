import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Server, Database, Globe } from "lucide-react";
import ServiceBox from "../ui/ServiceBox";
import ConnectionIcons from "../ui/ConnectionIcons";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    cardRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        isMobile
          ? { opacity: 0, y: 50 }
          : { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const services = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-8 w-8 text-purple-500 mb-3 transition-all duration-300 group-hover:scale-110" />,
      desc: "Creating responsive and interactive UIs using React, Next.js, and modern CSS frameworks.",
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-purple-500 mb-3 transition-all duration-300 group-hover:scale-110" />,
      desc: "Building server-side apps with Node.js, Express.js, and RESTful APIs.",
    },
    {
      title: "Database Management",
      icon: <Database className="h-8 w-8 text-purple-500 mb-3 transition-all duration-300 group-hover:scale-110" />,
      desc: "Managing MongoDB and SQL databases with efficient schema design.",
    },
    {
      title: "Full Stack Integration",
      icon: <Globe className="h-8 w-8 text-purple-500 mb-3 transition-all duration-300 group-hover:scale-110" />,
      desc: "Connecting frontend and backend for fully functional MERN apps.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-10 px-4 sm:px-10 bg-[#f8f6ff] dark:bg-[#0c0f1a] text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-lg sm:text-xl mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          I'm a passionate full-stack developer with expertise in the MERN stack. I love turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side Text */}
        <div ref={textRef} className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-600">My Journey</h3>
          <p className="text-gray-700 dark:text-gray-400">
            With over 3 years of experience, I’ve worked on a range of projects from e-commerce platforms to real-time apps.
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            My core stack is MERN, but I adapt quickly to new tools and technologies.
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            I focus on clean code, user-friendly design, and smooth performance.
          </p>

          <div className="flex gap-10 mt-6">
            <div>
              <p className="font-semibold">Experience</p>
              <p className="text-purple-600 dark:text-purple-400 font-bold text-lg">2+ Years</p>
            </div>
            <div>
              <p className="font-semibold">Projects</p>
              <p className="text-purple-600 dark:text-purple-400 font-bold text-lg">20+ Completed</p>
            </div>
          </div>
          <ConnectionIcons />
        </div>

        {/* Right Side Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceBox
              key={i}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              boxRef={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
