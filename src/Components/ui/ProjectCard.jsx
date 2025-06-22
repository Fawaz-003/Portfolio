// ui/ProjectCard.jsx
import { Github, Eye } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ title, desc, techs, code, live, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col min-h-[450px]"
    >
      {/* Image */}
      {image && (
        <div className="h-44 md:h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-h-full w-auto max-w-[100%] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{desc}</p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {techs.map((tech, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold border border-purple-600 text-purple-600 bg-white hover:bg-purple-50 dark:bg-transparent dark:hover:bg-gray-950 transition"
          >
            <Eye size={16} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
