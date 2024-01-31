import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/workInprogress.png"
          title="Stock Predictor"
          description="Created a machine-learning model with neural networks using TensorFlow and Keras layers."
        />
        <ProjectCard
          src="/workInprogress.png"
          title="Mars Weather App"
          description="Created a Mars weather application that accesses NASA API data archives to display weather conditions on Mars."
        />
        <ProjectCard
          src="/SpacePortProjectCardPic.png"
          title="Space Themed Website"
          description="Designed and created a space-themed website portfolio in Next.js 13 which is hosted using both GitHub and Vercel."  
        />
      </div>
    </div>
  );
};

export default Projects;

