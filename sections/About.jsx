'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', duration: 500 });
    }
  };
  return (
    <section id="about-section" className={`${styles.paddings} relative z-10 mt-[100px]`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Me" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[20px] text-[12px] text-center sm:w-[50%] w-full text-secondary-white"
        >
          <span className="font-extrabold text-indigo-500">I am a full-stack developer </span> {' '}with experience working with the
          PERN stack
          <span className="font-extrabold text-indigo-500">
            (PostgreSQL, Express, React, and Node.js)
          </span>{' '}. I have a
          passion for creating efficient and visually pleasing web
          applications. I am constantly seeking to expand my knowledge and
          stay up to date with the latest web development technologies.
          I have experience in developing responsive front-end using{' '}
          <span className="font-extrabold text-indigo-500">

            React, Next, Bootstrap, and TailwindCSS and a solid
            understanding of HTML, CSS, and JavaScript/TypeScript.
          </span>{' '}

          On the back-end, I have experience with{' '}
          <span className="font-extrabold text-indigo-500">
            Node.js, Express, and
            PostgreSQL.
          </span>{' '}

        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] animate-bounce object-contain mt-[28px] hover:cursor-s-resize"
          onClick={() => scrollToSection('project-section')}
        />
      </motion.div>
    </section>
  );
};

export default About;
