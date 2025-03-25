import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jordy Teunis",
  EMAIL: "cchangetheemail@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of games and other things i made, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "itch.io",
    HREF: "https://sqozy.itch.io",
  },
  { 
    NAME: "Github",
    HREF: "https://github.com/SqoZy"
  },
  { 
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/jordy-teunis/",
  }
];
