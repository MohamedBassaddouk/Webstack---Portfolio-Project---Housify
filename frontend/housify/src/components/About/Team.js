import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
<<<<<<< HEAD
import Milly from "../../assets/carla.png";
import Jamal from "../../assets/jamal.jpg";
import Medo from "../../assets/med.jpg";
=======
import Emma from "../../assets/Emma.jpeg";
import Milly from "../../assets/Milly.jpeg";
import Robert from "../../assets/Robert.jpeg";
import Zeliq from "../../assets/Zeliq.jpg";
>>>>>>> 88ccfd9... Update dependencies and improve configuration

const Team = (props) => {
  return (
    <div className="Credibility w-full max-w-[1440px] my-20 ">
      {/* section label */}
      <div className="pb-12 text-center">
        <h3 className="text-purple-700"> {props.header} </h3>
        <h5 className="pt-4"> {props.text} </h5>
      </div>

<<<<<<< HEAD
      <div className="flex flex-col justify-center align-center px-10 md:px-16 grid gap-10">
        <div className="TeamImageBox text-center grid">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Medo} alt="med"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Mohamed Bassaddouk</h5>
=======
      <div className="flex flex-col justify-center  px-10 md:px-16 xl:px-[180px] sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Zeliq} alt="Zeliq"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Zelipha U</h5>
>>>>>>> 88ccfd9... Update dependencies and improve configuration
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* <div className="TeamImageBox text-center">
=======
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Robert} alt="Robert"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Rob A</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
>>>>>>> 88ccfd9... Update dependencies and improve configuration
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Milly} alt="Milly"></img>
          </div>
          <div className="inline-block">
<<<<<<< HEAD
            <h5 className="text-[24px] sm:text-[20px]">Stephanie Loma</h5>
=======
            <h5 className="text-[24px] sm:text-[20px]">Mildred A</h5>
>>>>>>> 88ccfd9... Update dependencies and improve configuration
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
<<<<<<< HEAD
            <img className="w-full object-cover" src={Jamal} alt="jamal"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Jamal el-bakak</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div> */}
=======
            <img className="w-full object-cover" src={Emma} alt="Emma"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Emma A</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
>>>>>>> 88ccfd9... Update dependencies and improve configuration
      </div>
    </div>
  );
};

export default Team;
