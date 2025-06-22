// components/Projects.jsx
import ProjectCard from "../ui/ProjectCard";
import LMS from "../../assets/LMS.png"
import Restaurant from "../../assets/Restaurant.png"
import Portfolio from "../../assets/Portfolio.png"

const projects = [
  {
    title: "SMS - Students Management System",
    desc: "Manages student data, tracks progress, automates attendance and reports.",
    techs: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
    code: "https://github.com/Fawaz-003/lms-cahcet",
    live: "https://lms.cahcet.in/",
    image: LMS,
  },
  {
    title: "Food-Order Application",
    desc: "Snack World is a modern food ordering app for browsing, ordering, and tracking delicious meals in real-time.",
    techs: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
    code: "https://github.com/Fawaz-003/Snacks-World",
    live: "https://snackworld.infinityfreeapp.com",
    image: Restaurant,
  },
  {
    title: "Portfolio",
    desc: "A modern developer portfolio showcasing my projects, skills, and experience.",
    techs: ["React.js", "Node.js", "Tailwind.css", "GSAP"],
    code: "https://github.com/Fawaz-003/React-Portfolio",
    live: "https://fawaz-portfolio-lovat.vercel.app/",
    image: Portfolio,
  },
];

function Projects() {
  return (
    <section id="projects" className="pt-10 pb-20 bg-[#f9fafb] dark:bg-gray-950 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-gray-50">
          Featured <span className="text-purple-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
