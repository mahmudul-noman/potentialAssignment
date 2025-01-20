import React from "react";
import Image from "next/image";
import { ServiceType } from "@/typescript/types";

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { icon, name, description } = service;
  return (
    <div className="px-5 py-[54px] bg-gray-50 rounded-xl">
      <Image
        src={icon}
        alt={name}
        width={50}
        height={50}
        className="w-16 h-16 object-contain"
      />
      <h3 className="mt-6 mb-4 text-[32px] leading-[48px] font-semibold">
        {name}
      </h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
