import React from "react";
import Image from "next/image";
import "./TestimonialCard.css";

interface TestimonialCardProps {
  id: number | string;
  name: string;
  description: string;
  image: string;
}

const TestimonialCard = ({
  name,
  description,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="p-6 md:px-[77px] md:py-[55px] bg-gray-50 rounded-xl">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-[235px] h-[235px] object-cover !rounded-full"
        />

      <div className="relative">
        <span className="absolute top-[-14px] left-[-14px] text-orange-500 text-[40px] leading-none">&ldquo;</span>
        <p className="text-md md:text-[21px] leading-[31px]">
          {description}
        </p>
        <span className="absolute bottom-[50px] right-[235px] text-orange-500 text-[40px] leading-none">&rdquo;</span>
        <h4 className="text-[24px] leading-[36px] font-medium mt-2">{name}</h4>
        <p className="text-[19px] leading-[28px]">CEO</p>
      </div>

      </div>
    </div>
  );
};

export default TestimonialCard;
