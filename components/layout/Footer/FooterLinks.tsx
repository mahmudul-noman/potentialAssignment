import React from "react";
import Link from "next/link";
import { headerLinks } from "@/data/data";
import { HeaderLinksType } from "@/typescript/types";

const FooterLinks = () => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row items-center gap-4">
        {headerLinks.map((link: HeaderLinksType) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className="text-lg py-[10px] px-[10px] inline-block xl:text-xl hover:text-orange-600 duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
