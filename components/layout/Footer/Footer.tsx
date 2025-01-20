import React from "react";
import Logo from "@/components/common/Logo/Logo";
import FooterLinks from "./FooterLinks";
import SocialButton from "@/components/common/SocialButton/SocialButton";

const Footer = () => {
  return (
    <footer>
      <div className="pt-[109px] pb-[62px]">
        <div className="container">
          <div className="flex flex-col gap-9 items-center">
            <Logo />
            <FooterLinks />
            <SocialButton />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="color-primary font-bold">Mumair</span> All Rights
            Reserved , Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
