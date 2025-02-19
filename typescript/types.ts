import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type HeaderLinksType = {
  id: number | string;
  name: string;
  path: string;
};

export type SocialLinkType = {
  id: number | string;
  href: string;
  icon: IconType;
};

export type SkillTypes = {
  id: number | string;
  name: string;
  percentage: number;
};

export type ServiceType = {
  id: number | string;
  icon: StaticImageData;
  name: string;
  description: string;
};

export type ProjectType = {
  id: number | string;
  name: string;
  image: StaticImageData;
  tag: string;
};

export type TestimonialType = {
  id: number | string;
  name: string;
  description: string;
  image: string;
};