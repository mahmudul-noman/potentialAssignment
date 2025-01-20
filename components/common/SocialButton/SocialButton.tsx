import React from "react";
import Link from "next/link";
import { socialLinks } from "@/data/data";
import { SocialLinkType } from "@/typescript/types";

const SocialButton = () => {
  return (
    <ul className="flex gap-6">
      {socialLinks.map((link: SocialLinkType) => (
        <li key={link.id}>
          <Link href={link.href}>{link.icon({ size: 34 })}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialButton;
