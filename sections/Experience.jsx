'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Experience = () => (
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
          <ul className="flex w-[calc(100px*14)] gap-[64px] animate-scroll">
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img src="/html.png" alt="html logo" className="rounded-full" />
              <p className="m-2 p-4 text-[orange]">HTML</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img src="/css.png" alt="css logo" className="rounded-full" />
              <p className="m-2 p-4 text-[blue]">CSS</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/javascript.png"
                alt="javascript logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#ffff7a]">JavaScript</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/typescript.png"
                alt="typescript logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#6560ff]">TypeScript</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/figma.png"
                alt="figma logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#ff3b3b]">Figma</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/tailwind.png"
                alt="tailwind logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#6efaff]">Tailwind</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/bootstrap.png"
                alt="bootstrap logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#2f2194]">Bootstrap</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/react.png"
                alt="react logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#8ff8ff]">React</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/nextjs.png"
                alt="nextjs logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#ffffff]">Next</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img src="/node.png" alt="node logo" className="rounded-full" />
              <p className="m-2 p-4 text-[#5aff57]">Node</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/Postgresql.png"
                alt="postgrSQL logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#92cef4]">PostgreSQL</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/cSharp.png"
                alt="cSharp logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#a27aff]">C#</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/dotNet.png"
                alt="dotNet logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#be58bd]">.NET</p>
            </li>
            <li className="w-[100px] h-auto flex flex-col justify-center items-center m-2">
              <img
                src="/github.png"
                alt="github logo"
                className="rounded-full"
              />
              <p className="m-2 p-4 text-[#ffffff]">Github</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Experience;
