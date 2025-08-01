import React, { useEffect } from "react";

import ProjectCards from "./ProjectCards";
import placeholderImg from "../assets/images/placeholder.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import ITRosterCover from "../assets/images/itroster.png";
import odenThumbnail from "../assets/images/odenThumb.jpg";
import sucessTrackThumbnail from "../assets/images/sucessTrackThumb.png";
import fellasThumb from "../assets/images/fellas.png";
import neosaasThumb from "../assets/images/neosass.png";
import laymansThumbnail from "../assets/images/laymans.png";
import elffThumb from "../assets/images/elff.png";


const Projects = () => {
  const [openTab, setOpenTab] = React.useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const tabs2 = [
    {
      id: 1,
      title: "Web / Mobile Dev",
      projects: [
        // {
        //   id: 1,
        //   img: placeholderImg,
        //   title: "BlueBag",
        //   desc: "A portal to organize your cash, create goals",
        //   cat: "web",
        //   link1: "www.google.com",
        //   link2: "www.google.com",
        // },
        {
          id: 1,
          img: neosaasThumb,
          title: "NeoSass",
          desc: "Using AI to revolutionize automation for businesses. AIDR, and AI-Rep, our flagship products aim to help you automate the aspects of your business previously thought to be manual work.",
          cat: "web",
          link1Title: "NeoSass.net",
          link1: "https://www.neosaas.net/",
          // link2: "www.google.com",
        },
        {
          id: 2,
          img: laymansThumbnail,
          title: "Layman's Mixology",
          desc: "A web app built for home bartenders, and creationists. Utalizing AI and ML, Layman's Mixology can create customozed cocktails based off just what the user has, and their prefrences. Started as a Hackathon project.",
          cat: "web",
          link1Title: "GitHub",
          link1: "https://github.com/mitchellschul/laymans-mixology",
          // link2: "www.google.com",
        },
      ],
    },
    {
      id: 2,
      title: "UX",
      projects: [
        {
          id: 1,
          img: ITRosterCover,
          title: "IT Roster",
          desc: "Create a user-friendly solution to view and manage the members in UWM's cross-functional IT Organization.",
          cat: "UX",
          link1Title: "IT Roster",
          link1: "https://www.figma.com/file/IWid4oP8TRLCE73LV5Tk3B/IT-Roster---site?type=design&node-id=1%3A7007&mode=design&t=ppcUuHI6TBc5TQxz-1",

        },
        {
          id: 2,
          img: sucessTrackThumbnail,
          title: "Success Track Redesign",
          desc: "To design a smarter system or series of questions to help brokers choose the correct class to attend.",
          cat: "UX",
          link1Title: "Success Track",
          link1: "https://www.figma.com/file/1uOK8xxFOxn48rwqBWjrPF/Success-Track---Site?type=design&node-id=0%3A1&mode=design&t=KA78tIwoI3aVHgHS-1",

        },
        {
          id: 2,
          img: odenThumbnail,
          title: "Odin Classroom",
          desc: "To provide a reliable, user-friendly, and efficient coding platform tailored specifically for computer science courses.",
          cat: "UX",
          link1Title: "Odin Classroom",
          link1: "https://www.figma.com/file/xQxSldEfPiW6T3klM8S1Y3/Odin-UI---Site?type=design&node-id=0%3A1&mode=design&t=vcCQSml4wIJakTrk-1",
        },
      ],
    },
    {
      id: 3,
      title: "Other",
      projects: [
        {
          id: 1,
          img: fellasThumb,
          title: "Michigan State Accafellas",
          desc: "Acted as the WebMaster for the Michigan State University Accafellas.",
          cat: "UX",
          link1Title: "The Accafellas",
          link1: "https://ww.msufellas.com",
          link2: "",
        },
        {
          id: 2,
          img: elffThumb,
          title: "East Lansing Film Festival",
          desc: "A report from my time managing the social media for the East Lansing Film Festival",
          cat: "UX",
          link1Title: "Final Report",
          link1: "EastLansingFilmFestival.pdf",

        },
      ],
    },
  ];

  return (
    <div id='projects-section' className="my-12 h-screen maw-w-screen-lg lg:mx-auto md:mt-40 flex flex-col relative mb-40">
      <div className="text-xl font-bold">
        {/* <div className="w-10 h-2 bg-accent-blue relative right-2 bottom-3 z-1"></div> */}
      </div>
      <div className="max-width-screen-md  mt-16">
        <ul
          className="flex mb-0 list-none flex-wrap pb-4 flex-row justify-center"
          role="tablist"
        >
          {tabs2.map(({ id, title, projects }) => (
            <li key={id} className="-mb-px mr-4 last:mr-0 flex justify-center items-center ">
              <a
                className={
                  "px-4 py-2 hover:bg-accent-blue hover:text-white duration-200 ease-in-out text-s font-bold uppercase shadow-lg rounded block leading-normal " +
                  (openTab === id
                    ? " bg-accent-blue text-white"
                    : " border border-accent-blue")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(id);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        {tabs2.map((tab, index) => (
          <div
            key={index}
            className={openTab === tab.id ? "block" : "hidden"}
            id="link1"
            transition-opacity
            ease-in
            duration-700
            opacity-100
          >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2">
              {tab.projects.map((project, index) => (
                <div key={index}>
                  <ProjectCards
                    cover={project.img}
                    title={project.title}
                    desc={project.desc}
                    cat={project.cat}
                    link1Title={project.link1Title}
                    link1={project.link1}
                    link2={project.link2}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
