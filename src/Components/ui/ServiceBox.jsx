function ServiceBox({ icon, title, desc, boxRef }) {
  return (
    <div
      ref={boxRef}
      className="group bg-white dark:bg-[#111628] border border-purple-300/30 dark:border-purple-600/40 p-6 rounded-xl shadow-md transition-all transform hover:scale-105 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30"
    >
      {icon}
      <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {title}
      </h4>
      <p className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        {desc}
      </p>
    </div>
  );
}

export default ServiceBox;
