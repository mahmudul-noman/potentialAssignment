import React from "react";

interface SectionHeadingProps {
  title: string;
  description: string;
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-4xl w-full mx-auto space-y-4 pt-5 ${className}`}>
      <h3 className="text-5xl lg:text-[65px] font-semibold leading-[97px]">
        {title}
      </h3>
      <p className="text-lg lg:text-[21px] leading-[31px]">{description}</p>
    </div>
  );
};

export default SectionHeading;
