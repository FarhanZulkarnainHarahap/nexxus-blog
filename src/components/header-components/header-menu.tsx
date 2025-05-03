"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const listMenu = [
  { id: "home", name: "Home", href: "/" },
  { id: "blog", name: "Blog", href: "/blog" },
  { id: "category", name: "Category", href: "/categories" },
  { id: "about", name: "About", href: "/about" },
  { id: "contact", name: "Contact", href: "/contact-us" },
];

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-br from-gray-800 to-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-4 sm:w-10 sm:h-5">
            <Image
              src="/iconsayapkiri.svg"
              alt="Logo kiri"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-violet-500 text-lg font-semibold">
            Nexxus Website
          </h1>
          <div className="relative w-8 h-4 sm:w-10 sm:h-5">
            <Image
              src="/iconsayapkanan.svg"
              alt="Logo kanan"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav
          className="hidden md:flex space-x-4"
          role="navigation"
          aria-label="Main navigation"
        >
          {listMenu.map((menu) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.id}
                href={menu.href}
                className={`transition-colors duration-200 px-2 py-1 ${
                  isActive
                    ? "text-white font-semibold border-b-2 border-violet-500"
                    : "text-violet-300 hover:text-white"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden bg-[#191717] px-4 pb-4"
          role="navigation"
          aria-label="Mobile menu"
        >
          <ul className="space-y-2">
            {listMenu.map((menu) => {
              const isActive = pathname === menu.href;
              return (
                <li key={menu.id}>
                  <Link
                    href={menu.href}
                    className={`block px-2 py-1 transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold border-b-2 border-violet-500"
                        : "text-violet-300 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
