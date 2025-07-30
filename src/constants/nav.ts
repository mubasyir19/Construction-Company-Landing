export interface Menu {
  name: string;
  link: string;
  subMenu?: Menu[];
}

export const menuNav: Menu[] = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/service" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Project", link: "/project" },
  { name: "Contact", link: "/contact" },
];
