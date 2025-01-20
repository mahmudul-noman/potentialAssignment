import React from "react";
import Image from "next/image";
import { ProjectType } from "@/typescript/types";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="h-[601px]">
      <Image
        src={project.image}
        alt={project.name}
        width={500}
        height={250}
        className="w-full h-[489px] object-contain rounded-xl"
      />
      <div className="mt-[-10px] md:mt-[-10px] lg:mt-[37px]">
        <p className="text-[19px] text-orange-500 mb-[10px]">{project.tag}</p>
        <h3 className="text-xl font-bold">{project.name}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
