export interface Menu {
  name: string;
  link: string;
  subMenu?: Menu[];
}

export const menuNav: Menu[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Project", link: "/project" },
  { name: "Contact", link: "/contact" },
];
