'use client';

import { motion } from 'framer-motion';

import Typed from 'react-typed';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div name="home">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row">
              <motion.div variants={textVariant(1.1)} className="flex flex-col justify-center h-full">
                <h2
                  className="md:text-2xl text-lg font-bold text-indigo-500 "
                >
                  Hi
                  <span className="wave">👋</span>
                  ,my name is
                </h2>
                <h3
                  className="text-[#CCD6f6] md:text-9xl text-5xl font-bold py-4 max-w-7xl "
                >
                  Aswin Malla.
                </h3>
                <div>
                  <p
                    className="md:text-2xl sm:text-xl max-w-7xl  font-bold text-[#000000]"
                  >
                    I'm a
                    <Typed
                      className="md:text-2xl sm:text-xl text-md sm:max-w-lg font-bold py-1 ml-2 text-indigo-500"
                      strings={[
                        'software developer.',
                        'problem solver.',
                        'web developer.',
                        'passionate learner.',
                        'adaptable multitasker.',
                        'analytical thinker.',
                      ]}
                      typeSpeed={70}
                      backSpeed={10}
                      loop
                    />
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
