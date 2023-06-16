'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
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
        className="mt-[8px] font-normal sm:text-[22px] text-[10px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">I am a full-stack developer </span> {' '}with experience working with the
        PERN stack (PostgreSQL, Express, React, and Node.js). I have a
        passion for creating efficient and visually pleasing web
        applications. I am constantly seeking to expand my knowledge and
        stay up to date with the latest web development technologies.

        I have experience in developing responsive front-end using{' '}
        <span className="font-extrabold text-white">

          React, Next, Bootstrap, and TailwindCSS and a solid
          understanding of HTML, CSS, and JavaScript/TypeScript.
        </span>{' '}

        On the{' '}
        <span className="font-extrabold text-white">

          back-end, I have experience with
          Node.js, Express, and
          PostgreSQL.
        </span>{' '}

      </motion.p>
      <motion.p variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[8px] font-normal sm:text-[22px] text-[10px] text-center text-secondary-white"
      >
        I am a team player and have excellent communication
        skills, which have helped me to work effectively with remote
        teams. I am also a quick learner and am always looking for new
        challenges. I am excited to continue to develop my skills and
        work on new and exciting projects. When I am not coding, I enjoy
        reading about new technologies, hiking, working out, cooking,
        and spending time with my family.
        of today, using only{' '}

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
