"use client";
import { useState } from "react";
import Link from "next/link";
import telegram from "../../../public/images/telegram.png";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between  px-6 py-4 bg-white shadow-2xl relative z-50">
      <div className="text-lg font-semibold text-black"> </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link href="#hero" className="text-black  hover:text-gray-700">
          <h4 className="font-bold text-md lg:text-2xl xl:text-3xl">Home</h4>
        </Link>
        <span className="text-black font-semibold">|</span>
        <Link
          href="#about"
          className="text-black font-semibold hover:text-gray-700"
        >
          <h4 className="font-bold text-md lg:text-2xl xl:text-3xl">About</h4>
        </Link>
        <span className="text-black font-semibold">|</span>
        <Link
          href="#roadmap"
          className="text-black font-semibold hover:text-gray-700"
        >
          <h4 className="font-bold text-md lg:text-2xl xl:text-3xl">Roadmap</h4>
        </Link>
        <span className="text-black font-semibold">|</span>
        <Link
          href="#tokenomics"
          className="text-black font-semibold hover:text-gray-700"
        >
          <h4 className="font-bold text-md lg:text-2xl xl:text-3xl">
            Tokenomics
          </h4>
        </Link>
        <span className="text-black font-semibold">|</span>
        <Link
          href="#contact"
          className="text-black font-semibold hover:text-gray-700"
        >
          <h4 className="font-bold text-md lg:text-2xl xl:text-3xl">Contact</h4>
        </Link>
      </div>

      {/* Telegram Button for Desktop */}
      <div className="hidden md:flex">
        <button className="flex gap-5 items-center px-6 lg:px-10 py-2 shadow-xl text-white bg-black rounded-md hover:bg-gray-800 relative z-50">
          <Image src={telegram} alt="abc" width={15} height={15} />
          <h4 className="font-bold text-md lg:text-2xl">Telegram</h4>
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <button className="md:hidden text-black" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-2xl">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-black font-semibold hover:text-gray-700"
            >
              <h4 className="font-bold">Home</h4>
            </Link>
            <Link
              href="#about"
              onClick={toggleMenu}
              className="text-black font-semibold hover:text-gray-700"
            >
              <h4 className="font-bold">About</h4>
            </Link>
            <Link
              href="#roadmap"
              onClick={toggleMenu}
              className="text-black font-semibold hover:text-gray-700"
            >
              <h4 className="font-bold">Roadmap</h4>
            </Link>
            <Link
              href="#tokenomics"
              onClick={toggleMenu}
              className="text-black font-semibold hover:text-gray-700"
            >
              <h4 className="font-bold">Tokenomics</h4>
            </Link>
            <Link
              href="#contact"
              onClick={toggleMenu}
              className="text-black font-semibold hover:text-gray-700"
            >
              <h4 className="font-bold">Contact</h4>
            </Link>
            <button className="flex gap-5 items-center px-10 py-2 shadow-xl text-white bg-black rounded-md hover:bg-gray-800">
              <Image src={telegram} alt="abc" width={15} height={15} />
              <h4 className="font-bold">Telegram</h4>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
