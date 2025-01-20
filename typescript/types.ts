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
