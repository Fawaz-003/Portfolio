// components/ui/ConnectionIcons.jsx
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ConnectionIcons() {
  const iconContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      iconContainer.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: iconContainer.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const icons = [
    {
      href: "https://github.com/Fawaz-003",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/abdul-fawaz",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:abdulfawaz84@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
    },
    {
      href: "https://instagram.com/mr_fawaz_18_",
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
    },
  ];

  return (
    <div
      ref={iconContainer}
      className="flex flex-wrap gap-5 mt-8 justify-center md:justify-start"
    >
      {icons.map(({ href, icon, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 rounded-full bg-purple-100 dark:bg-[#1a1d2b] text-purple-700 dark:text-purple-300 hover:bg-purple-800 dark:hover:bg-purple-900 hover:text-white dark:hover:text-white transition-colors duration-300 shadow-md hover:scale-110 transform"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default ConnectionIcons;
