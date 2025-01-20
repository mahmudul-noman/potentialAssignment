"use client";

import React from "react";
import Button from "@/components/common/Button/Button";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import { projects } from "@/data/data";
import ProjectCard from "@/components/common/Cards/ProjectCard/ProjectCard";
import { ProjectType } from "@/typescript/types";
import {
  ALL,
  APP_DESIGN,
  GRAPHIC_DESIGN,
  UIUX,
  WEB_DESIGN,
} from "@/projectsCategories/projectsCategories";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = React.useState(WEB_DESIGN);

  const filteredProject =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.tag === activeTab);

  return (
    <section id="projects">
      <div className="container">
        <SectionHeading
          title="My Projects"
          description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
          className="text-center mb-12"
        />
        <div>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <Button
              className={`border ${
                activeTab === ALL ? "bg-orange-500 text-white" : ""
              } hover:bg-orange-500 hover:text-white rounded-xl`}
              onClick={() => setActiveTab(ALL)}
            >
              All
            </Button>
            <Button
              className={`border ${
                activeTab === UIUX ? "bg-orange-500 text-white" : ""
              } hover:bg-orange-500 hover:text-white rounded-xl`}
              onClick={() => setActiveTab(UIUX)}
            >
              UI/UX
            </Button>
            <Button
              className={`border ${
                activeTab === WEB_DESIGN ? "bg-orange-500 text-white" : ""
              } hover:bg-orange-500 hover:text-white rounded-xl`}
              onClick={() => setActiveTab(WEB_DESIGN)}
            >
              Web Design
            </Button>
            <Button
              className={`border ${
                activeTab === APP_DESIGN ? "bg-orange-500 text-white" : ""
              } hover:bg-orange-500 hover:text-white rounded-xl`}
              onClick={() => setActiveTab(APP_DESIGN)}
            >
              App Design
            </Button>
            <Button
              className={`border ${
                activeTab === GRAPHIC_DESIGN ? "bg-orange-500 text-white" : ""
              } hover:bg-orange-500 hover:text-white rounded-xl`}
              onClick={() => setActiveTab(GRAPHIC_DESIGN)}
            >
              Graphics Design
            </Button>
          </div>
          {filteredProject.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 mt-12 transition-opacity duration-500 ease-in-out">
              {filteredProject.map((project: ProjectType) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl font-semibold mt-12">
              Project Not Found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
