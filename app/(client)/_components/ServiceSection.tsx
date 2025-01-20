import React from "react";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import ServiceCard from "@/components/common/Cards/ServiceCard/ServiceCard";
import { services } from "@/data/data";
import { ServiceType } from "@/typescript/types";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <SectionHeading
          title="Services"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          className="text-center mb-12"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service: ServiceType) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
