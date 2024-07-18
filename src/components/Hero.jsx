import React from "react";
import { motion } from "framer-motion";
import ReferralModal from "./ReferralModal";
const Hero = () => {
  const slideDown = (delay) => ({
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });

  const slideUp = (delay) => ({
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });

  const ImageShow = (delay, rotate) => ({
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: rotate,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });
  return (
    <div
      className=" flex justify-center items-center p-10 flex-col h-[90vh] relative"
      id="refer"
    >
      <motion.nav
        variants={slideDown(0.2)}
        initial="hidden"
        animate="show"
        className="w-1/3 h-12  flex justify-around items-center rounded-3xl bg-blue/10 shadow-md"
      >
        <a
          className="cursor-pointer text-blue  hover:text-blue scroll-smooth"
          href="#refer"
        >
          Refer
        </a>
        <a
          className="cursor-pointer hover:text-blue scroll-smooth"
          href="#benefits"
        >
          Benefits
        </a>
        <a
          className="cursor-pointer hover:text-blue scroll-smooth "
          href="#faqs"
        >
          FAQs
        </a>
        <a
          className="cursor-pointer hover:text-blue scroll-smooth"
          href="#support"
        >
          Support
        </a>
      </motion.nav>
      <section className="flex justify-around lg:px-20 w-full h-[60vh]  m-12 ">
        <motion.div className="flex-1 flex flex-col items-start py-10">
          <h1 className="text-8xl font-bold font-inter pb-6">
            Let’s Learn & Earn
          </h1>
          <img src="/Line.svg" className="w-3/5 pb-10" />
          <h3 className="text-2xl font-inter font-medium pb-10">
            Get a chance to win up-to{" "}
            <span className="font-bold text-4xl text-blue"> Rs.15,000</span>
          </h3>
          {/* Refer Now */}{" "}
          <ReferralModal  />
        </motion.div>
        <div className="flex-1 bg-hero rounded-lg h-full relative ">
          <div className="relative h-full overflow-hidden">
            <img
              src="/hero_bg.png"
              className="absolute h-full w-full scale-[1.2] object-cover z-10"
            />
            <img src="/Line_2.svg" className="absolute top-0 z-0 w-full" />
          </div>

          <motion.img
            variants={ImageShow(0.2, 180)}
            initial="hidden"
            animate="show"
            src="/Money.svg"
            className="absolute -top-16 rotate-180 z-50"
          />
          <motion.img
            variants={ImageShow(0.3, 45)}
            initial="hidden"
            animate="show"
            src="/Money.svg"
            className="absolute -bottom-20 z-50"
          />
          <motion.img
            variants={ImageShow(0.2, 45)}
            initial="hidden"
            animate="show"
            src="/Money.svg"
            className="absolute right-16 top-40 rotate-12 scale-[0.6]"
          />
          <motion.img
            variants={ImageShow(0.2, 130)}
            initial="hidden"
            animate="show"
            src="/Money.svg"
            className="absolute -right-20 top-0 rotate-90 z-50"
          />
        </div>
      </section>
      <div className="w-[600px] h-[600px] absolute -top-60 -left-60 rounded-full bg-blue/5 blur-3xl" />
      <div className="w-[600px] h-[600px] absolute -bottom-60 -right-60 rounded-full bg-blue/5 blur-3xl" />
    </div>
  );
};

export default Hero;
