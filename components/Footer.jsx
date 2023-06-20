'use client';

import { motion } from 'framer-motion';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Aswin Malla
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Aswin Malla. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://www.github.com/AMT98" title="Github" target="_blank" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1" rel="noreferrer">
              <FaGithub size={15} color="white" />
            </a>
            <a href="https://www.linkedin.com/aswinmalla" title="Linkedin" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
              <FaLinkedinIn size={15} color="blue" />
            </a>
            <a href="mailto: aswinmalla12@gmail.com" type="email" title="Email" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
              <HiOutlineMail size={15} color="red" />
            </a>
            <a href="/Resume_AswinMalla.pdf" download target="_blank" title="Download resume" className="border hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-2 m-1">
              <FcDocument size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
