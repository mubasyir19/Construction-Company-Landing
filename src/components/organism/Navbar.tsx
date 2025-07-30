import { Menu, menuNav } from "@/constants/nav";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-9 py-6">
      <div className="">
        <h2 className="text-2xl font-semibold">Construction Company Landing</h2>
      </div>
      <ul className="flex items-center gap-6">
        {menuNav.map((menu: Menu, index: number) => (
          <li key={index}>
            <Link href={`${menu.link}`} className="text-sm font-medium">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
