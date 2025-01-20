"use client";

import React from "react";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section id="testimonials">
      {/* <div className="container"> */}
      <div className="container">
        <SectionHeading
          title="Testimonials"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          className="text-center mb-12"
        />
      </div>
      <div className="p-4">
        <TestimonialSlider />
      </div>
      {/* </div> */}
    </section>
  );
};

export default TestimonialSection;
