import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-200 dark:bg-black py-5">
      <div className="flex items-center justify-center text-sm md:text-base text-gray-900 dark:text-gray-100 font-medium flex-wrap text-center px-4">
        Copyright © {new Date().getFullYear()} Made with
        <FaHeart className="text-purple-700 mx-2 inline-block animate-pulse" />
        by <span className="ml-1 font-semibold">Fawaz</span>.
      </div>
    </footer>
  );
}

export default Footer;
