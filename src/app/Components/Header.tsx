"use client"; 

import { BiSolidHomeHeart } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {}
        <div className="flex items-center">
          <BiSolidHomeHeart size={40} />
        </div>

        {}
        <nav className="hidden md:flex space-x-6 text-lg font-bold">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="/project" className="hover:text-gray-300">
            Project
          </Link>
        </nav>

        {}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {}
      {isOpen && (
        <nav className="md:hidden bg-zinc-700">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Project
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}