import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "./Modal";
import Navbar from "./Navigation";
const MainHero = () => {
  const[open,setOpen] = useState(false)
  return (
    <div className="w-full bg-white py-16 px-4">

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Image Section */}
        <img
          className="w-[500px] mx-auto my-4"
          src={"https://img.freepik.com/premium-vector/isometric-work-team-cloud-workplaces-platforms-modern-teams-workflow-process-development-company-startup-illustration_102902-1723.jpg?w=1060"}
          alt="/"
        />
        {/* Text and Button Section */}
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Welcome</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Know about the RealEstate and Coachings 
          </h1>
          <p>
          The idea that one can go through life without conflict or issues arising is unrealistic. Some might dream of a frictionless ride through the world as the ideal journey, but without some form of pushback, growth is impossible. It is these problems that we face which build our character, engage our creativity and build humility.
          </p>
           <div  className="text-[#00df9a] hover:text-black  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 ">

            {<Modal btnhead="Getting Started"/>}
           </div>
        </div>
      </div>
    </div>
  );
};
export default MainHero;