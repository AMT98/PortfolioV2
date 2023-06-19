'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, slideIn } from '../utils/motion';
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
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="w-full bg-transparent">
        <div className="h-[200px] m-auto overflow-hidden relative w-auto">
          <ul className="flex w-[calc(100px*14)] gap-4 animate-scroll">
            <li className="w-[100px]"><img src="/html.png" alt="html logo" className="rounded-full " /></li>
            <li className="w-[100px]"><img src="/css.png" alt="css logo" className="rounded-full " /></li>
            <li className="w-[100px]"><img src="/javascript.png" alt="javascript logo" className="rounded-full " /></li>
            <li className="w-[100px]"><img src="/typescript.png" alt="typescript logo" className="rounded-full " /></li>
            <li className="w-[100px]"><img src="/react.png" alt="react logo" className="rounded-full " /></li>
            <li className="w-[100px]"><img src="/nextjs.png" alt="nextjs logo" /></li>
            <li className="w-[100px]"><img src="/node.png" alt="node logo" /></li>
            <li className="w-[100px]"><img src="/Postgresql.png" alt="postgrSQL logo" /></li>
            <li className="w-[100px]"><img src="/tailwind.png" alt="tailwind logo" /></li>
            <li className="w-[100px]">Image 10</li>
            <li className="w-[100px]">Image 11</li>
            <li className="w-[100px]">Image 12</li>
            <li className="w-[100px]">Image 13</li>
            <li className="w-[100px]">Image 14</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
