import React from "react";
import Logo from "@/components/common/Logo/Logo";
import { IoMdClose } from "react-icons/io";
import { headerLinks } from "@/data/data";
import Link from "next/link";

interface ResponsiveHeaderProps {
  close: () => void;
}

const ResponsiveHeader = ({ close }: ResponsiveHeaderProps) => {
  return (
    <header className="fixed inset-0 h-full bg-white z-50">
      <div className="container">
        <div className="pt-[61px] flex justify-between items-center">
          <Logo />
          <button onClick={close}>
            <IoMdClose size={30} />
          </button>
        </div>
        <ul className="py-4 space-y-4">
          {headerLinks.map((headerLink) => (
            <li key={headerLink.id}>
              <Link
                href={headerLink.path}
                className="text-xl block py-4"
                onClick={close}
              >
                {headerLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
