import ProjectCard from "@/components/ProjectCard";
import React from "react";

import project1 from "@/rsc/img/project1.png";
import project2 from "@/rsc/img/project2.png";

const WrapperProject = () => {
  return (
    <div>
      <div className="font-dm-mono font-medium text-xl text-center mt-24 mb-7 ">
        Personal Projects
      </div>
      <div className="flex justify-center gap-10 flex-wrap">
        <ProjectCard img={project1} name="thing" status="Develop" />
        <ProjectCard img={project2} name="guezz" status="Design" />
      </div>
    </div>
  );
};

export default WrapperProject;
