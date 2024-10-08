import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import modamed from "../../assets/med.jpg"
=======
>>>>>>> 88ccfd9... Update dependencies and improve configuration

const ExpertCard = (props) => {
  return (
    <div className="bg-zinc-800 pb-4 rounded-[50px] rounded-tr-none  hover:scale-105 duration-500">
      <div className="Image-wrapper w-full bg-zinc-500 rounded-[50px] rounded-tr-none h-[280px] overflow-hidden mb-4">
<<<<<<< HEAD
        <img className="w-full object-cover" src={modamed} alt="" />
=======
        <img className="w-full object-cover" src={props.img} alt="" />
>>>>>>> 88ccfd9... Update dependencies and improve configuration
      </div>

      <div className=" pb-4  cursor-pointer flex justify-between align-middle pt-2 px-8">
        <p>{props.name}</p>
        <button className="py-2 px-4">
          <NavLink className="text-l" to="/agentDashboard">
            View
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;
