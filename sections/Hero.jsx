'use client';

import { motion } from 'framer-motion';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import Typed from 'react-typed';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div name="home">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row">
              <motion.div
                variants={textVariant(1.1)}
                className="flex flex-col justify-center items-center h-full"
              >
                <img
                  src="/heroImage.png"
                  alt="heroImg"
                  className="w-[250px] h-[250px] bg-indigo-500 rounded-full"
                />
                <h3 className="text-[#CCD6f6] md:text-4xl text-xl font-bold py-4 max-w-7xl ">
                  <span className="wave mr-2">👋</span>
                  My name is Aswin
                </h3>
                <div>
                  <p className="md:text-2xl sm:text-xl max-w-7xl  font-bold text-indigo-200">
                    I'm
                    <Typed
                      className="w-full md:text-2xl sm:text-xl text-md sm:max-w-lg font-bold py-1 ml-2 text-indigo-500"
                      strings={[
                        'a software developer',
                        'a problem solver',
                        'a web developer',
                        'a passionate learner',
                        'an adaptable multitasker',
                        'an analytical thinker',
                      ]}
                      typeSpeed={70}
                      backSpeed={10}
                      loop
                    />
                  </p>
                </div>

                <div className="rounded-xl flex gap-3 p-2 mt-4">
                  <p className="border rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <FaGithub size={25} color="white" />
                  </p>
                  <p className="border rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <FaLinkedinIn size={25} color="blue" />
                  </p>
                  <p className="border rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <HiOutlineMail size={25} color="red" />
                  </p>
                  <p className="border rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <FcDocument size={25} />
                  </p>
                </div>
                <motion.img
                  variants={fadeIn('up', 'tween', 0.3, 1)}
                  src="/arrow-down.svg"
                  alt="arrow down"
                  className="w-[18px] h-[28px] animate-bounce items-center self-center mt-[28px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full -mt-[500px]"
      >
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/map.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/resumeStamp.png"
              alt="stamp"
              className="sm:w-[205px] w-[150px] sm:h-[155px] h-[150px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
