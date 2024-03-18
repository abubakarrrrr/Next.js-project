'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
    const colors = ['#ff0066', // Pink
    '#6600ff', // Purple
    '#00cc66', // Green
    '#ff9900', // Orange
    '#0099ff', // Blue
    '#ff6600', // Orange
    '#ff33cc', // Light Pink
    '#9933ff', // Violet
    '#33cc33', // Lime Green
    '#3399ff', // Sky Blue
    '#ff0000'  ];
    let index = 0;
  
    setInterval(() => {
      const div = document.getElementById('colorChangingText');
      div.style.color = colors[index];
      index = (index + 1) % colors.length;
    }, 2000);

  return (
    <nav className="p-4 shadow-md text-black bg-white fixed w-full  mb-24   ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
        <div className="font-bold text-lg cursor-pointer" id="colorChangingText">
      <Link href='/'>♦⪼𝓜𝓲𝓪𝓷 𝓐𝓫𝓾𝓫𝓪𝓴𝓪𝓻♦</Link>
    </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Responsive navigation links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-16 left-0 py-10 w-full shadow-md bg-gray-100`}
          >
            <Link className=" hover:text-red-700 " href="/" >Home</Link><br /><br />
            <Link className=" hover:text-red-700 " href="/about">About</Link><br /><br />
            <Link className=" hover:text-red-700 " href="/movie">Products</Link><br /><br />
            <Link className=" hover:text-red-700 " href="/contact">Contact</Link><br /><br />
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-4">
            <Link className="hover:text-red-700" href="/">Home</Link>
            <Link className="hover:text-red-700" href="/about">About</Link>
            <Link className="hover:text-red-700" href="/movie">Products</Link>
            <Link className="hover:text-red-700" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
