"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import ResponsiveHeader from "./ResponsiveHeader";
import { headerLinks } from "@/data/data";
import { HeaderLinksType } from "@/typescript/types";
import { IoMenu } from "react-icons/io5";

const HeaderLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className="hidden lg:flex items-center gap-4">
        {headerLinks.map((link: HeaderLinksType) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className="text-base py-[10px] px-[10px] inline-block md:text-lg xl:text-xl"
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Button className="btn-primary">Download CV</Button>
        </li>
      </ul>
      <button
        className="block lg:hidden p-2"
        onClick={() => setOpen(true)}
      >
        <IoMenu size={30} />
      </button>
      {open && <ResponsiveHeader close={() => setOpen(false)} />}
    </div>
  );
};

export default HeaderLinks;
