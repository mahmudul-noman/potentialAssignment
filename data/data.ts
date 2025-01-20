
import {
  HeaderLinksType,
  SocialLinkType,
} from "@/typescript/types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const headerLinks: HeaderLinksType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Me",
    path: "#about-me",
  },
  {
    id: 3,
    name: "Services",
    path: "#services",
  },
  {
    id: 4,
    name: "Projects",
    path: "#projects",
  },
  {
    id: 5,
    name: "Testimonials",
    path: "#testimonials",
  },
  {
    id: 6,
    name: "Contact",
    path: "#contact",
  },
];


export const socialLinks: SocialLinkType[] = [
  {
    id: 1,
    href: "#",
    icon: FaFacebook,
  },
  {
    id: 2,
    href: "#",
    icon: FaTwitter,
  },
  {
    id: 3,
    href: "#",
    icon: FaInstagram,
  },
  {
    id: 4,
    href: "#",
    icon: FaLinkedin,
  },
];