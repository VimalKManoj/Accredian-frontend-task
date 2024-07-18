import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const slideRight = (delay) => ({
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  const slideUp = (delay) => ({
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });

const Benefits = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView]);

  return (
    <section
      id="benefits"
      className="w-full  flex flex-col justify-around items-center p-10"
    >
      <h2 className="text-2xl font-inter font-medium p-10">
        What are the referral <span className="text-blue ">Benefits?</span>{" "}
      </h2>

      <div ref={ref} className="flex justify-center w-2/3 mb-10">
        <motion.div variants={slideRight(0.2)}
          initial="hidden"
          animate={controls} className="flex flex-col  shadow-md rounded-md w-96 h-min m-2 mr-4">
          <h2 className="p-3 rounded-t-md bg-blue text-white cursor-pointer ">
            ALL PROGRAMS
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Product Management
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Strategy & Leadership
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Business Management
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Fintech
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Senior Management
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Data Science
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Digital Transformation
          </h2>
          <h2 className="p-3 border-b-2 cursor-pointer hover:bg-blue/5">
            Business Analytics
          </h2>
        </motion.div>
        <motion.div variants={slideUp(0.2)}
          initial="hidden"
          animate={controls}>
          <div className="col-span-3 flex flex-col shadow-md rounded-md">
            <div className="grid grid-cols-3 bg-gray-100 rounded-t-xl">
              <h2 className="p-3 bg-blue/5 text-sky-800 font-bold">Programs</h2>
              <h2 className="p-3 bg-blue/5 text-sky-800 font-bold">Referrer Bonus</h2>
              <h2 className="p-3 bg-blue/5 text-sky-800 font-bold">Referee Bonus</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3 w-full">
                Professional Certificate Program in Product Management
              </h2>
              <h2 className="pb-3 px-4">₹ 7,000</h2>
              <h2 className="pb-3 px-4">₹ 9,000</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3">
                PG Certificate Program in Strategic Product Management
              </h2>
              <h2 className="pb-3 px-4">₹ 9,000</h2>
              <h2 className="pb-3 px-4">₹ 11,000</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3">
                Executive Program in Data Driven Product Management
              </h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3 ">
                Executive Program in Product Management
              </h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3">Executive Program in Product Management</h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3">
                Advanced Certification in Product Management
              </h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
            </div>
            <div className="grid grid-cols-3 px-4">
              <h2 className="pb-3">
                Executive Program in Product Management 
              </h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
              <h2 className="pb-3 px-4">₹ 10,000</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
