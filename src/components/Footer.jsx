import { AtSign, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <main className=" mx-auto w-full mt-4 md:mt-0 flex items-center justify-center font-ubuntu">
      <div className="border-b-4 flex gap-x-8 p-2 mb-2 border-secondary text-text">
        <a
          href="https://www.linkedin.com/in/hashir-yameen-52287a135/"
          target="_blank"
          rel="noreferrer"
          className="group relative cursor-none"
        >
          <span className="group-hover:block absolute -top-8 -left-4 hidden bg-secondary p-1 text-xs rounded-xl">
            LinkedIn
          </span>
          <Linkedin className="hover:text-blue-400 transition-all" />
        </a>
        <a
          href="https://github.com/HashirY"
          target="_blank"
          rel="noreferrer"
          className="group relative cursor-none"
        >
          <span className="group-hover:block absolute -top-8 -left-2 hidden bg-secondary p-1 text-xs rounded-xl">
            Github
          </span>
          <Github className="hover:text-[#26C6DA] transition-all" />
        </a>
        <a
          href="mailto:hashiryameen8@gmail.com"
          className="group relative cursor-none"
        >
          <span className="group-hover:block absolute -top-8 -left-2 hidden bg-secondary p-1 text-xs rounded-xl">
            Gmail
          </span>
          <AtSign className="hover:text-red-400 transition-all" />
        </a>
        <a
          href="https://leetcode.com/hashirY/"
          target="_blank"
          rel="noreferrer"
          className="group relative cursor-none"
        >
          <span className="group-hover:block absolute -top-8 -left-2 hidden bg-secondary p-1 text-xs rounded-xl">
            Leetcode
          </span>
          <SiLeetcode className="h-6 w-6 hover:text-[#FEA016]" />
        </a>
      </div>
    </main>

    //
  );
};

export default Footer;
