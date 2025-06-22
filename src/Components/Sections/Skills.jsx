import SkillCategory from "../ui/Skillcategory";
import Technologies from "../ui/Technologies";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: "98%" },
    { name: "JavaScript", level: "95%" },
    { name: "ReactJS", level: "95%" },
    { name: "Tailwind CSS", level: "92%" },
    { name: "Bootstrap", level: "90%" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "92%" },
    { name: "Express.js", level: "90%" },
    { name: "MongoDB", level: "85%" },
    { name: "PHP", level: "80%" },
    { name: "MySQL", level: "82%" },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", level: "90%" },
    { name: "AWS", level: "75%" },
    { name: "Docker", level: "70%" },
    { name: "Figma", level: "85%" },
    { name: "Canva", level: "80%" },
  ];

  return (
    <section id="skills" className="py-10 px-6 bg-[#fefeff] dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend & Database" skills={backendSkills} />
        <SkillCategory title="Tools & Others" skills={toolsSkills} />
      </div>
      <Technologies />
    </section>
  );
};

export default Skills;
