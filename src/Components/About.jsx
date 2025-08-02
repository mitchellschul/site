import React from "react";

import reactSVG from "../assets/images/svgs/react.svg";
import htmlSVG from "../assets/images/svgs/html.svg";
import cssSVG from "../assets/images/svgs/css.svg";
import tailwindSVG from "../assets/images/svgs/tailwind.svg";
import jsSVG from "../assets/images/svgs/js.svg";
import figmaSVG from "../assets/images/svgs/figma.svg";

import mitchPic from "../assets/images/bluebuttonup.png";
import presentPic from "../assets/images/working.png";

const About = () => {
  return (
    <div id="about-section" className="mt-24 md:mt-40 flex flex-col w-full h-full relative ">
      <div className="text-xl font-bold md:mx-52">
        {/* <div className="w-10 h-2 bg-accent-blue relative right-2 bottom-3 z-1"></div> */}
      </div>

      <div className="mt-16 mx-12 max-w-screen-lg lg:mx-auto flex flex-col items-center md:flex-row justify-between">
        <div>
          <div className="w-8 h-8 border-4 rounded-md border-accent-blue absolute top-44 ml-11"></div>
          <div className="w-12 h-12 bg-accent-blue rounded-md border-accent-blue absolute mt-[230px] ml-52"></div>
          <div className="w-48 h-64 bg-accent-blue absolute left-70 top-56 rounded-md">
            <img
              class="object-cover w-48 h-64 rounded-md "
              src={mitchPic}
              alt="Mitchell Schuldinger"
            />
          </div>
          <div className="w-64 h-64  ml-24 rounded-md">
            <img
              class="object-contain rounded-md "
              src={presentPic}
              alt="Mitchell Schuldinger"
            />
          </div>
        </div>
        <div className="w-[90%] flex-wrap mt-48 mx-2 md:w-[50%] md:mt-0">
          I recently graduated from Michigan State University with a degree in Information Science and a minor in Computer Science. I’ve always been fascinated by how technology can enhance everyday experiences, especially when it means taking something people already rely on and making it faster, easier, or more intuitive. Whether I am building out interfaces, designing data visualizations, or managing end to end technical projects, I aim to create solutions that are both human centered and forward thinking.
          <br />
          <br />
          A big part of my passion lies in helping people understand and engage with the tools around them. I enjoy breaking down technical concepts, uncovering hidden inefficiencies, and finding creative ways to improve the systems we often take for granted. This mindset has shaped my work across design, development, and technical support and continues to influence how I approach every challenge.
          <br />
          <br />
          Outside of tech, I love being outdoors and spend a lot of time hiking and exploring new places. I also enjoy experimenting in the kitchen, traveling whenever I can, and collecting unique watches, especially the ones with stories behind them.


        </div>
      </div>

      {/* Large */}
      <div className="hidden md:flex  mt-16 md:mt-60 py-8 w-full flex-row justify-evenly items-center bg-accent-blue bottom-0 relative">
        <div className="flex flex-col items-center gap-2 text-white">
          <img src={reactSVG} alt="react" className="w-8 h-8 md:w-16 md:h-16" />
          React
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img src={htmlSVG} alt="html" className="w-8 h-8 md:w-16 md:h-16" />
          HTML5
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img src={cssSVG} alt="css" className="w-8 h-8 md:w-16 md:h-16" />
          CSS
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img
            src={tailwindSVG}
            alt="tailwind"
            className="w-8 h-8 md:w-16 md:h-16"
          />
          Tailwind CSS
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img
            src={jsSVG}
            alt="javascript"
            className="w-8 h-8 md:w-16 md:h-16"
          />
          Javascript
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img src={figmaSVG} alt="figma" className="w-8 h-8 md:w-16 md:h-16" />
          Figma
        </div>
      </div>

      {/* Shmall */}
      <div className="md:hidden mt-16 md:mt-60 py-8 w-full grid grid-cols-3 gap-4 justify-evenly items-center bg-accent-blue bottom-0 relative">
        <div className="flex flex-col items-center gap-2 text-white">
          <img src={reactSVG} alt="react" className="w-8 h-8 md:w-16 md:h-16" />
          React
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img src={htmlSVG} alt="html" className="w-8 h-8 md:w-16 md:h-16" />
          HTML5
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img src={cssSVG} alt="css" className="w-8 h-8 md:w-16 md:h-16" />
          CSS
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img
            src={tailwindSVG}
            alt="tailwind"
            className="w-8 h-8 md:w-16 md:h-16"
          />
          Tailwind CSS
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img
            src={jsSVG}
            alt="javascript"
            className="w-8 h-8 md:w-16 md:h-16"
          />
          Javascript
        </div>

        <div className="flex flex-col items-center gap-2 text-white">
          <img src={figmaSVG} alt="figma" className="w-8 h-8 md:w-16 md:h-16" />
          Figma
        </div>
      </div>
    </div >
  );
};

export default About;
