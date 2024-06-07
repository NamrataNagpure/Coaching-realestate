import React, { useState } from "react";
import MainHero from "./MainHero";

import { NavLink } from "react-router-dom";
import { Modal } from "./Modal";
import Navbar from "./Navigation";

export default function Coaching() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          {/* Image Section */}
          <img
            className="w-[500px] mx-auto my-4"
            src={
              "https://img.freepik.com/premium-vector/isometric-work-team-cloud-workplaces-platforms-modern-teams-workflow-process-development-company-startup-illustration_102902-1723.jpg?w=1060"
            }
            alt="/"
          />
          {/* Text and Button Section */}
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">Welcome</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Know about the Coachings
            </h1>
            <p>
            This reminds us that we don’t need to strive for perfection, our strength lies in our imperfections and accepting and celebrating this gives us the time to focus our attention on the attainable. As Ralph Waldo Emerson always said, to be yourself is the greatest accomplishment, so work on being the best version of yourself possible.
            </p>
            <div className="text-[#00df9a] hover:text-black  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 ">
              {<Modal page="other" btnhead="Coaching" height='600px' detail="Enter the Detail"/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
