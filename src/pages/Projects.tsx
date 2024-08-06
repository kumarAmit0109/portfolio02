import { projects } from "../data";
import live from "../assets/live.png";
import github from "../assets/github.png";
function Projects() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto flex flex-col gap-y-4 py-6 mt-24">
      <div className="text-3xl sm:text-4xl font-bold text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
        Projects
      </div>
      <div className="flex flex-col gap-y-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card/70 border rounded-xl shadow p-4 sm:p-6 flex flex-col gap-y-3"
          >
            <div className="text-3xl tracking-wider font-medium ">
              {project.name}
            </div>
            <div className="flex items-center flex-wrap gap-2.5 ">
              {project.skills.map((skill, index) => (
                <div
                  key={index}
                  className=" text-sm border-2 border-gray-700 bg-gradient-to-tl from-pink-500 to-yellow-500 dark:from-teal-500 dark:to-teal-200  rounded-3xl px-2 py-1 text-white dark:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-x-3 ">
              <a href={project.livelink}>
                <img src={live} className="w-16" />
              </a>
              <a href={project.githublink}>
                <img src={github} className="w-8" />
              </a>
            </div>
            <div className="flex flex-col gap-y-1.5">
              {project.description.map((value, index) => (
                <div key={index} className="text-justify">
                  {value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
