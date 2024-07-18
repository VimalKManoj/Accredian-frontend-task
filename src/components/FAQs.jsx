import * as React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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

const FAQs = () => {
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
      className="flex justify-center items-center flex-col p-10 bg-[#F9F8FE]"
      id="faqs"
    >
      <h2 className="text-2xl font-inter font-medium p-10">
        Frequently Asked <span className="text-blue ">Questions?</span>{" "}
      </h2>
      <div ref={ref} className="w-2/3 flex justify-around items-center">
        <motion.div
          variants={slideUp(0.2)}
          initial="hidden"
          animate={controls}
          className="flex justify-start flex-col flex-1 p-5 shadow-lg w-64 h-96 m-2 bg-white rounded-md"
        >
          <div className="w-10 h-10 flex items-center justify-center text-blue bg-blue/15 border-2 border-blue rounded-full mb-4 ">
            <QuestionMarkIcon />
          </div>

          <h3 className="font-bold ">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </h3>
          <h3>
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </h3>
        </motion.div>
        <motion.div
          variants={slideUp(0.4)}
          initial="hidden"
          animate={controls}
          className="flex justify-start flex-col flex-1 p-5 shadow-lg w-64 h-96 m-2 bg-white rounded-md"
        >
          <div className="w-10 h-10 flex items-center justify-center text-blue bg-blue/15 border-2 border-blue rounded-full mb-4 ">
            <QuestionMarkIcon />
          </div>

          <h3 className="font-bold ">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </h3>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            facilis reprehenderit sed autem maxime necessitatibus itaque magnam,
            deleniti cupiditate possimus provident quidem inventore!
          </h3>
        </motion.div>
        <motion.div
          variants={slideUp(0.6)}
          initial="hidden"
          animate={controls}
          className="flex justify-start flex-col flex-1 p-5 shadow-lg w-64 h-96 m-2  bg-white rounded-md"
        >
          <div className="w-10 h-10 flex items-center justify-center text-blue bg-blue/15 border-2 border-blue rounded-full mb-4">
            <QuestionMarkIcon />
          </div>

          <h3 className="font-bold">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </h3>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            deleniti quo hic dolore possimus! Blanditiis vero qui at ab ipsam
            voluptatibus animi consequuntur, saepe quo. Quos, doloremque
            expedita. Veniam, recusandae.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
