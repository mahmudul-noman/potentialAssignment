import React from "react";
import Button from "@/components/common/Button/Button";
import HeroImage from "@/public/images/hero-img.png";
import Image from "next/image";
import SocialButton from "@/components/common/SocialButton/SocialButton";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 mt-24">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Hi I am</p>
            <h3 className="text-[32px] font-semibold color-primary">
              Muhammad Umair
            </h3>
            <h1 className="text-7xl lg:text-[100px] font-extrabold">
              UI & UX <span className="lg:text-right lg:block">Designer</span>
            </h1>
            <p className="hero-subtitle">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
            </p>
            <Button className="btn-primary w-52">Hire Me</Button>
          </div>
          <div>
            <Image
              src={HeroImage}
              alt="Hero Image"
              width={530}
              height={250}
              className="mx-auto"
            />
            <div className="flex justify-center items-center mt-5">
              <SocialButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
