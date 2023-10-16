"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29}/>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.key} href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Menu Bars */}
      <MenuBars />
    </nav>
  );
};

const MenuBars = () => {
  const [isMenuOpen, setItMenuOpen] = useState(false);

  const toggleMenu = () => {
    setItMenuOpen((prev) => !prev)
  };

  return (
    <div onClick={toggleMenu} className="lg:hidden transition-all duration-1000">
      {isMenuOpen ? (
        <div className="flex flex-col gap-8 bg-green-50 rounded-2xl px-10 py-8 absolute top-4 right-[5%]">
          <div className="flexEnd w-full cursor-pointer">
            <div className="bg-white rounded-full w-8 h-1 transform rotate-45 absolute right-[15%]"/>
            <div className="bg-white rounded-full w-8 h-1 transform -rotate-45 absolute right-[15%]"/>
          </div>

          {/* MOBILE NAVIGATION */}
          <ul className="lg:hidden gap-8 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link key={link.key} href={link.href} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex-col flexBetween w-8 h-5 cursor-pointer">
          <div className="bg-gray-90 rounded-full w-full h-1"/>
          <div className="bg-gray-90 rounded-full w-full h-1"/>
          <div className="bg-gray-90 rounded-full w-full h-1"/>
        </div>
      )}
    </div>
  );
};

export default Navbar;