'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Experience" textStyles="text-center" />
      <TitleText title={<>Skills I've aquired over time</>} textStyles="text-center" />
      <div className="w-full bg-transparent">
        <div className="h-[200px] m-auto overflow-hidden relative w-auto">
          <ul className="flex w-[calc(250px*14)] animate-scroll">
            <li className="w-[250px]">Image 1</li>
            <li className="w-[250px]">Image 2</li>
            <li className="w-[250px]">Image 3</li>
            <li className="w-[250px]">Image 4</li>
            <li className="w-[250px]">Image 5</li>
            <li className="w-[250px]">Image 6</li>
            <li className="w-[250px]">Image 7</li>
            <li className="w-[250px]">Image 8</li>
            <li className="w-[250px]">Image 9</li>
            <li className="w-[250px]">Image 10</li>
            <li className="w-[250px]">Image 11</li>
            <li className="w-[250px]">Image 12</li>
            <li className="w-[250px]">Image 13</li>
            <li className="w-[250px]">Image 14</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Insights;
