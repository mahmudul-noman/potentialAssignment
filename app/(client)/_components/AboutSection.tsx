import React from "react";
import Image from "next/image";
import AboutImage from "@/public/images/about-img.png";
import { skills } from "@/data/data";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const AboutSection = () => {
  return (
    <section id="about-me">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div>
            <Image
              src={AboutImage}
              alt="About"
              width={600}
              height={250}
              className="mx-auto"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-6xl font-semibold">About Me</h3>
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
            </p>
            <div className="space-y-5">
              {skills.map((skill) => (
                <ProgressBar
                  key={skill.id}
                  {...skill}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
