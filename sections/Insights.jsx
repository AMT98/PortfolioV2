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
      <TitleText
        title={<>Skills I've aquired over time</>}
        textStyles="text-center"
      />
      <motion.div
        variants={staggerContainer}
        className="w-full bg-transparent"
      >
        <div className="h-[200px] m-auto overflow-hidden relative w-auto mt-10">
          <ul className="flex w-[calc(150px*14)] gap-[64px] animate-scroll">
            <li className="w-[150px]">
              <img src="/html.png" alt="html logo" className="rounded-full " />
            </li>
            <li className="w-[150px]">
              <img src="/css.png" alt="css logo" className="rounded-full " />
            </li>
            <li className="w-[150px]">
              <img
                src="/javascript.png"
                alt="javascript logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/typescript.png"
                alt="typescript logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/figma.png"
                alt="figma logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/tailwind.png"
                alt="tailwind logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/bootstrap.png"
                alt="bootstrap logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/react.png"
                alt="react logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/nextjs.png"
                alt="nextjs logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img src="/node.png" alt="node logo" className="rounded-full " />
            </li>
            <li className="w-[150px]">
              <img
                src="/Postgresql.png"
                alt="postgrSQL logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/cSharp.png"
                alt="cSharp logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/dotNet.png"
                alt="dotNet logo"
                className="rounded-full "
              />
            </li>
            <li className="w-[150px]">
              <img
                src="/github.png"
                alt="github logo"
                className="rounded-full "
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
