import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div>
      <div className="hidden w-full lg:mx-auto max-w-screen-lg md:flex flex-row justify-between items-center  h-20 text-browngray">
        <div>
          <h1 className="text-5xl cursor-default">MS</h1>
        </div>

        <ul className="flex ml-4 mr-2 last:ml-0 last:mr-0">
          <li className="relative  p-2 md:p-3  hover:cursor-pointer hover:text-gray" onClick={() => {
            const anchor = document.querySelector('#projects-section')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>
            <a>
              Projects
            </a>
          </li>
          <li className="relative  p-2 md:p-3  hover:cursor-pointer hover:text-gray" onClick={() => {
            const anchor = document.querySelector('#about-section')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }} >
            <a>
              About
            </a>
          </li>
          <li className="relative mr-2 p-2 md:p-3  hover:cursor-pointer hover:text-gray" onClick={() => {
            const anchor = document.querySelector('#contact-section')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>
            <a>
              Contact
            </a>
          </li>
          <li className="relative flex justify-center items-center  rounded border-2 border-accent-blue px-4 hover:cursor-pointer hover:bg-accent-blue hover:text-white duration-200 ease-in-out">
            <a
              href="resume-mitchell-schuldinger.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>

        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden float-right"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 left-0 w-full
               h-screen bg-gradient-to-b from-black to-accent-blue text-white ">
          <li className="relative  p-2 md:p-3  hover:cursor-pointer hover:text-gray" onClick={() => {
            const anchor = document.querySelector('#projects-section')
            setNav(!nav)
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>
            <a>
              Projects
            </a>
          </li>
          <li className="relative  p-2 md:p-3  hover:cursor-pointer hover:text-gray" onClick={() => {
            const anchor = document.querySelector('#about-section')
            setNav(!nav)
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }} >
            <a>
              About
            </a>
          </li>
          <li className="relative mr-2 p-2 md:p-3  hover:cursor-pointer hover:text-gray" onClick={() => {
            const anchor = document.querySelector('#contact-section')
            setNav(!nav)
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>
            <a>
              Contact
            </a>
          </li>
        </ul>
      )}



    </div>


  );

};

export default NavBar;
