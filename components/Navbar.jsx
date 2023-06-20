'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
// import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'HOME 🏠',
      enterDelay: 0.8,
      exitDelay: 1,
    },
    {
      id: 2,
      link: 'ABOUT ℹ️',
      enterDelay: 0.7,
      exitDelay: 0.8,
    },
    {
      id: 3,
      link: 'PROJECTS 💪🏽',
      enterDelay: 0.6,
      exitDelay: 0.6,
    },
    {
      id: 4,
      link: 'EXPERIENCE ⌨️',
      enterDelay: 0.5,
      exitDelay: 0.4,
    },
    {
      id: 5,
      link: 'CONTACT 📞',
      enterDelay: 0.4,
      exitDelay: 0.2,
    },
  ];
  const handleLogo = () => window.location.reload();
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2,
      },
    },
  };
  return (

    <AnimatePresence className="mb-10">
      <motion.div
        exit="exit" className="flex justify-between items-center w-full h-20 z-20 fixed cursor-pointer bg-black mb-20 backdrop-blur-[100px]"
      >
        <div onClick={handleLogo} className="mt-[25px]">
          <svg
            aria-label="Home"
            id="logo"
            enableBackground="new 0 0 300 300"
            height={140}
            viewBox="0 0 300 300"
            width={140}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="none"
                stroke="#4c51bf"
                strokeWidth="3"
                fontFamily="Arial, sans-serif"
                fontSize="100"
                fontWeight="bold"
              >
                A
              </text>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#4c51bf"
                fontFamily="Arial, sans-serif"
                fontSize="60"
                fontWeight="bold"
              >
                A
              </text>
            </g>
          </svg>

        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 text-blue-500 capitalize z-20"
        >
          {nav ? <FaTimes size={30} color="red" /> : <FaBars size={30} color="#4C51BF" />}
        </div>
        {nav && (
        <motion.ul variants={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit="exit"
          className="flex flex-col backdrop-blur-[5px] justify-center items-center absolute top-0 right-0 h-screen bg-gray-200 w-screen sm:w-[20%] text-gray-800 font-bold rounded-tl-lg rounded-tb-lg capitalize focus:outline"
        >
          {links.map(({ id, link, enterDelay, exitDelay }) => (
            <li key={id} className="cursor-pointer capitalize py-4 text-xl">
              <Link
                onClick={() => setNav(!nav)}
                href={link}
                smooth
                duration={500}
              >
                <motion.p initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: enterDelay }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: exitDelay,
                    },
                  }}
                >

                  {link}
                </motion.p>
              </Link>
            </li>
          ))}
        </motion.ul>
        )}
      </motion.div>
    </AnimatePresence>

  );
};

export default Navbar;
