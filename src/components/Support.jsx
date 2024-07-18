import React from "react";

const Support = () => {
  return (
    <section className="flex justify-center items-center p-20 " id="support">
      <div className="w-[68vw] h-44 bg-blue rounded-xl relative flex justify-between">
        <img src="/circle.svg" className="absolute bottom-0 right-0 h-40" />
        <div className="flex justify-around  items-center text-white w-full">
          <img src="/support.svg" className="hidden md:block"/>
          <div className="hidden md:block z-10 -ml-20">
            <h3 className="font-bold text-xl">Want to delve deeper into the program?</h3>
            <h3>
              Share your details to receive expert insights from our program
              team!
            </h3>
          </div>
          <button className="  px-6 py-1 bg-white border-2  text-blue rounded-md h-10 z-10">
            Get in touch!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Support;
