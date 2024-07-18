import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ReferralModal from "./ReferralModal";

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

const HowToRefer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div
     
      className="w-full h-[70vh] bg-[#F9F8FE] flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl font-inter font-medium">
        How do I<span className="text-blue"> Refer?</span>
      </h2>
      <div  ref={ref} className="flex justify-around items-center w-full p-10">
        <motion.div
          variants={slideUp(0.2)}
          initial="hidden"
          animate={controls}
          className="w-72 h-72 shadow-lg rounded-md bg-white flex flex-col justify-center items-center p-6"
        >
          <img src="/Icon_1.svg" className="w-16 m-6" />
          <h3 className="font-inter text-center">
            Submit referrals easily via our website’s referral section.
          </h3>
        </motion.div>
        <motion.div
          variants={slideUp(0.4)}
          initial="hidden"
          animate={controls}
          className="w-72 h-72 shadow-lg rounded-md bg-white flex flex-col justify-center items-center p-6"
        >
          <img src="/Icon_2.svg" className="w-16 m-6" />
          <h3>Earn rewards once your referral joins an Accredian program.</h3>
        </motion.div>
        <motion.div
          variants={slideUp(0.6)}
          initial="hidden"
          animate={controls}
          className="w-72 h-72 shadow-lg rounded-md bg-white flex flex-col justify-center items-center p-6"
        >
          <img src="/Icon_3.svg" className="w-16 m-6" />
          <h3>
            Both parties receive a bonus 30 days after program enrollment.
          </h3>
        </motion.div>
      </div>
      <ReferralModal/>
    </div>
  );
};

export default HowToRefer;
