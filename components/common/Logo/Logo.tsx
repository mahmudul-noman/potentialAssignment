import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logo.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="mumair logo"
      width={500}
      height={250}
      className="w-[180px] h-[50px] xl:w-[279px] xl:h-[67px] cursor-pointer"
    />
  );
};

export default Logo;
