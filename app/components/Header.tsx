"use client"

import React from 'react';
import "../globals.css";
import { useState } from 'react';
import Link from 'next/link';

const items = [
  {
    name: "HOME",
    href: "/"
  },
  {
    name: "ABOUT",
    href: "/about"
  },
  {
    name: "CONTACT",
    href: "/contact"
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header min-w-fit overflow-hidden mb-2 text-black">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-4xl ml-4 xl:text-4xl 2xl:text-5xl my-5 font-light hover:text-yellow-400 duration-300 text-yellow-500">studdybuddy</p>
          </Link>
        </div>
        <div className="hidden md:block mr-8">
          <ul className="flex space-x-14">
            {items.map((item, index) => (
              <Link href={item.href} key={index}>
                <li className="text-xl tracking-widest hover:underline hover:text-slate-800 my-1 ml-2 cursor-pointer w-max whitespace-nowrap transition-all duration-300">
                  <button className="menu-button">{item.name}</button>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <div className={`mobile-menu ${isMenuOpen ? " transition duration-300 absolute" : "hidden"} flex-col items-center justify-center`}>
            {items.map((item, index) => (
              <Link href={item.href} key={index}>
                <ul className="my-1 text-xl hover:text-slate-900 w-max whitespace-nowrap transition-all duration-300">
                  <button className="menu-button">{item.name}</button>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
