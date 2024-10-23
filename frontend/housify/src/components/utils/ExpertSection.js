import React from "react";
import ExpertCard from "./ExpertCard";
import { NavLink } from "react-router-dom";

const ExpertSection = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-20 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-purple-700"> {props.header} </h3>
          <h5 className="pt-4"> {props.text} </h5>
        </div>

        {/* property-card-container */}
<<<<<<< HEAD
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div></div>
          <div className="p-2">
            <ExpertCard name="Mohamed Bassaddouk" linkedin="" contact="" />
          </div>
          <div></div>
=======
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-2">
            <ExpertCard name="Lucy Jane" linkedin="" contact="" />
          </div>
          <div className="p-2">
            <ExpertCard name="Zelipha On" linkedin="" contact="" />
          </div>
          <div className="p-2">
            <ExpertCard name="Mildred Uz" linkedin="" contact="" />
          </div>
          <div className="p-2">
            <ExpertCard name="Robert Az" linkedin="" contact="" />
          </div>
>>>>>>> 88ccfd9... Update dependencies and improve configuration
        </div>
        <div className="w-full pt-10 flex justify-center">
          <button className="mx-4">Load More</button>
          <button className="mx-4">
            <NavLink className="" to="/AgentForm">
              Become Agent
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
