import render from "../assets/render.png";
// import render_dark from "../assets/render_dark.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import reactjs from "../assets/reactjs.png";
import express from "../assets/express.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import mongoose from "../assets/mongoose.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import vercel from "../assets/vercel.png";
import vscode from "../assets/vscode.png";

function TechStack() {
  const skills = [
    { category: "Programming Languages", icon: c, name: "C" },
    { category: "Programming Languages", icon: cpp, name: "C++" },
    { category: "Programming Languages", icon: javascript, name: "JavaScript" },
    { category: "Programming Languages", icon: typescript, name: "TypeScript" },
    { category: "Frontend Development", icon: html, name: "HTML" },
    { category: "Frontend Development", icon: css, name: "CSS" },
    { category: "Frontend Development", icon: tailwind, name: "Tailwind CSS" },
    { category: "Frontend Development", icon: reactjs, name: "React.js" },
    { category: "Frontend Development", icon: redux, name: "Redux" },
    { category: "Backend Development", icon: nodejs, name: "Node.js" },
    { category: "Backend Development", icon: express, name: "Express.js" },
    { category: "Backend Development", icon: mongodb, name: "MongoDB" },
    { category: "Backend Development", icon: mongoose, name: "Mongoose" },
    { category: "Version Control", icon: git, name: "Git" },
    { category: "Version Control", icon: github, name: "GitHub" },
    { category: "Deployment", icon: vercel, name: "Vercel" },
    { category: "Deployment", icon: render, name: "Render" },
    { category: "Tools", icon: vscode, name: "Visual Studio Code" },
    { category: "Tools", icon: postman, name: "Postman" },
  ];
  const category = [
    "Programming Languages",
    "Frontend Development",
    "Backend Development",
    "Version Control",
    "Deployment",
    "Tools",
  ];

  return (
    <div className="w-11/12 mx-auto max-w-7xl py-6 ">
      <div className="text-3xl sm:text-4xl font-bold text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
        Tech Stack
      </div>

      <div className="grid grid-cols-1 w-full lg:w-3/4 max-w-5xl mx-auto md:grid-cols-2 gap-6 pt-6">
        {category.map((cat, index) => (
          <div
            key={index}
            className="bg-card/70 border rounded-xl shadow flex flex-col  items-center sm:items-start gap-y-4 p-4 sm:p-6 "
          >
            <div className="text-xl tracking-wider font-medium sm:text-2xl ">
              {cat}
            </div>
            <div className="flex items-center flex-wrap gap-4 ">
              {skills.map(
                (skill, index) =>
                  skill.category === cat && (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger>
                          <img src={skill.icon} className="w-12 " />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
