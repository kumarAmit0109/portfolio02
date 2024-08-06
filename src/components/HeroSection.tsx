import { Download, MoveUpRight } from "lucide-react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
function HeroSection() {
  return (
    <div className=" flex flex-col items-center gap-y-4 w-11/12 mx-auto max-w-7xl pt-18 pb-6 mt-40">
      <div className="relative">
        <img
          src={hero1}
          className="w-36 rounded-xl border-2 border-b-4 border-pink-200 border-b-white"
        />
        <img
          src={hero2}
          className="w-24 hidden sm:block absolute top-20 -left-24 shadow-black -rotate-45 rounded-xl shadow-lg"
        />
        <img
          src={hero3}
          className="w-20 absolute -top-8 left-32 shadow-lg shadow-black rotate-12 rounded-xl"
        />
      </div>
      <div className="text-2xl font-medium text-center tracking-wider mt-6 sm:mt-12">
        I'm Amit Kumar<span className="text-4xl">👋</span>
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
        Full Stack Developer
      </div>
      <div className="w-full sm:w-10/12 md:w-3/4 lg:w-1/2 max-w-3xl text-center text-muted-foreground text-lg ">
        I am a dedicated final year B.Tech IT student{" "}
        <span className="text-2xl">🎓</span> with a strong foundation in Full
        Stack Development. <span className="text-xl">💻</span> Passionate about
        building scalable web applications <span className="text-xl">🌐</span>,
        I thrive on solving complex problems <span className="text-xl">🧩</span>{" "}
        and continuously learning new technologies.{" "}
        <span className="text-xl">📚🚀</span>
      </div>
      <div className="flex items-center gap-x-3 ">
        <a href="https://github.com/kumarAmit0109" target="_blank">
          <img src={github} className="w-10 " />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-kumar-a9030b293"
          target="_blank"
        >
          <img src={linkedin} className="w-10" />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 item-center ">
        <a href="mailto:pandeyamit01092002@gmail.com">
          <div className="flex items-center justify-center gap-x-2 border-2 border-gray-700 rounded-3xl px-6 py-3">
            <span className="tracking-wider ">Connect me here</span>
            <MoveUpRight size={18} />
          </div>
        </a>
        <a href="https://github.com/kumarAmit0109/Resume">
          <div className="flex items-center justify-center gap-x-2 border-2 border-gray-700 bg-gradient-to-tl from-pink-500 to-yellow-500 dark:from-teal-500 dark:to-teal-200  rounded-3xl px-6 py-3 text-white dark:text-black">
            <span className=" tracking-wider ">Resume</span>
            <Download size={18} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
