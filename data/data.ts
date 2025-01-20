
import {
  HeaderLinksType,
  SkillTypes,
  SocialLinkType,
} from "@/typescript/types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


// Header Section Data
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

// Social Link Data
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


// Skills Section Data
export const skills: SkillTypes[] = [
  {
    id: 1,
    name: "UX",
    percentage: 90,
  },
  {
    id: 2,
    name: "Website Design",
    percentage: 85,
  },
  {
    id: 3,
    name: "App Design",
    percentage: 95,
  },
  {
    id: 4,
    name: "Graphics Design",
    percentage: 92,
  },
];