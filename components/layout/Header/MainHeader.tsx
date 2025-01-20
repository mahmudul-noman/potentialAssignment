import React from "react";
import Logo from "@/components/common/Logo/Logo";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="pt-[61px] pb-2.5 flex items-center sticky top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center gap-3">
          <Logo />
          <HeaderLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
