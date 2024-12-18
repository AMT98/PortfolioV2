'use client';

import { motion } from 'framer-motion';

import { FaGithub } from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({ id, imgUrl, title, index, active, handleClick, githubUrl, liveUrl }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white capitalize absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {/* {title} */}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className="flex flex-row gap-6 justify-start items-center">

          <div>

            <a
              href={githubUrl}
              target="_blank"
              className={`${styles.flexCenter} w-[60px] animate-pulse hover:animate-bounce h-[60px] rounded-full border text-white  glassmorphism mb-[16px]`} rel="noreferrer"
            >
              <FaGithub />
            </a>
            <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
              Github
            </p>
          </div>
          <div>

            <a
              href={liveUrl}
              target="_blank"
              className={`${styles.flexCenter} w-[60px] animate-pulse hover:animate-bounce h-[60px] rounded-full border text-white glassmorphism mb-[16px]`} rel="noreferrer"
            >
              <MdPreview />
            </a>
            <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase ml-1">
              Demo
            </p>
          </div>
        </div>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ProjectCard;
