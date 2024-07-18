import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center border-b border-n-6/50 lg:backdrop-blur-sm ">
      <nav className="flex w-full screen-max-width justify-between lg:bg-n-1/80 ">
        <div className="flex  items-center ">
          <img src="/Logo.svg" className="pr-8" />
          <button className=" md:flex justify-center items-center px-6 py-1 bg-blue text-white rounded-md h-10 sm:hidden">
            Courses
          </button>
        </div>
        <div className="flex  items-center w-[360px] justify-between transition-colors">
          <h3 className="cursor-pointer hover:text-blue">Refer & Earn</h3>
          <h3 className="cursor-pointer hover:text-blue">Resources</h3>
          <h3 className="cursor-pointer hover:text-blue">About Us</h3>
        </div>
        <div className="w-[240px] flex items-center justify-between">
          <button className="  px-6 py-1 bg-grey/20 rounded-md h-10">
            Login
          </button>
          <button className="  px-6 py-1 bg-blue text-white rounded-md h-10">
            Try for free
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
