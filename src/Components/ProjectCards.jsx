import React from "react";

const ProjectCards = (props) => {
  let html = (
    <div className="flex flex-row gap-4 mt-2">
      {/* <a href={props.link1} className="underline underline-offset-2 hover:text-gray" target="_blank">
        Files
      </a> */}
      <a href={props.link1} className="underline underline-offset-2 hover:text-gray" target="_blank">
        {props.link1Title}
      </a>
    </div>
  );
  if (props.cat === "UX") {
    html = (
      <div className="flex flex-row gap-4 mt-2">
        <a href={props.link1} className="underline underline-offset-2 hover:text-gray" target="_blank">
          {props.link1Title}
        </a>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center m-2">
      <a href={props.link1} target="_blank"><img
        src={props.cover}
        alt={props.title}
        className="w-[310px] h-[200px] m-0 transition duration-300 ease-in-out hover:opacity-80 fit-cover"
      /></a>

      <div className="text-lg font-bold pt-0 my-2">{props.title}</div>
      <div className="text-center w-[320px]">{props.desc}</div>
      {html}
    </div>
  );
};

export default ProjectCards;
