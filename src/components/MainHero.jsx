import React from "react";
const MainHero = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Image Section */}
        <img
          className="w-[500px] mx-auto my-4"
          src={"https://img.freepik.com/premium-vector/real-estate-building-logo-design-inspiration-building-logo-design_695276-996.jpg?w=740"}
          alt="/"
        />
        {/* Text and Button Section */}
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Welcome</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Know about the RealEstate and Coachings 
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] hover:text-black hover:bg-[#00df9a] duration-75 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainHero;