import type { LucideIcon } from "lucide-react";

export type Model = {
  slug: string;
  name: string;
  shortName: string;
  area: number;
  price: string;
  modelName?: string;
  description: string;
  features: string[];
  image: string;
  planImage: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type IconText = {
  title: string;
  description: string;
  icon: LucideIcon;
};
