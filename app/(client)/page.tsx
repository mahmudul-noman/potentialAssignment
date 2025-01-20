import React from "react";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServiceSection";
import ProjectSection from "./_components/ProjectSection";
import TestimonialSection from "./_components/TestimonialSection";
import C2ASection from "./_components/C2ASection";
import Footer from "@/components/layout/Footer/Footer";

const page = () => {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectSection />
    <TestimonialSection />
    <C2ASection />
    <Footer />
    </>
  );
};

export default page;
