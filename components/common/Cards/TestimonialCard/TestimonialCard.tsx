import React from "react";
import Image from "next/image";

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
          className="w-[120px] h-[120px] object-cover !rounded-full"
        />
        <div>
          <p className="text-md md:text-[21px] leading-[31px]">{description}</p>
          <h4 className="text-[24px] leading-[36px] font-medium mt-2">{name}</h4>
          <p className="text-[19px] leading-[28px]">CEO</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
