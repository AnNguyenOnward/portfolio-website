import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-24 h-24' key={technology.name}>
          <img src={technology.icon}/>
          <p className="text-black"> {technology.name} </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");