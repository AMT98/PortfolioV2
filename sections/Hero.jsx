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
                  <a href="https://www.github.com/AMT98" title="Github" target="_blank" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1" rel="noreferrer">
                    <FaGithub size={25} color="white" />
                  </a>
                  <a href="https://www.linkedin.com/aswinmalla" title="Linkedin" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <FaLinkedinIn size={25} color="blue" />
                  </a>
                  <a href="mailto: aswinmalla12@gmail.com" type="email" title="Email" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <HiOutlineMail size={25} color="red" />
                  </a>
                  <a href="/Resume_AswinMalla.pdf" download target="_blank" title="Download resume" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
                    <FcDocument size={25} />
                  </a>
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
        className="relative w-full -mt-[450px]"
      >
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/map.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
