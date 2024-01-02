import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setCurrentPage }) => {
  const html = document.querySelector("html");

  return (
    <nav className="flex items-center justify-center pt-5 font-ubuntu relative  p-2 text-text bg-background">
      <motion.div
        className="absolute left-1"
        animate={{ y: [0, -3, 0], x: [0, -2, 0] }} // Animation for translateY
        transition={{ duration: 4, repeat: Infinity }}
        whileHover={{ y: 0, x: 0 }} // Stop animation on hover
      >
        <h1 className="font-bold lg:text-2xl sm:text-md">
          <span>hashir</span>
          <span>.</span>
          <span>dev</span>
          <div className="w-full h-1 bg-secondary"></div>
        </h1>
      </motion.div>
      <motion.div
        className=" cursor-none hover:cursor-none border-b-4  border-secondary flex gap-x-4 lg:px-4 sm:px-2 lg:py-2 sm:py-1 text-sm"
        animate={{ y: [0, -3, 0], x: [0, -2, 0] }} // Animation for translateY
        transition={{ duration: 4, repeat: Infinity }}
        whileHover={{ y: 0, x: 0 }} // Stop animation on hover
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/work"
          onClick={() => setCurrentPage("work")}
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Work
        </NavLink>
        <NavLink
          to="/resume"
          onClick={() => setCurrentPage("resume")}
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setCurrentPage("contact")}
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Contact
        </NavLink>
      </motion.div>

      <motion.div
        className="absolute right-1 flex  text-secondary"
        animate={{ y: [0, -3, 0], x: [0, -2, 0] }} // Animation for translateY
        transition={{ duration: 4, repeat: Infinity }}
        whileHover={{ y: 0, x: 0 }}
      >
        <Moon
          onClick={() => html.classList.remove("dark")}
          className="hidden dark:block"
        />
        <Sun
          onClick={() => html.classList.add("dark")}
          className="dark:hidden"
        />
      </motion.div>
    </nav>
  );
};

export default Navbar;
