'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'HOME 🏠',
    },
    {
      id: 2,
      link: 'ABOUT ℹ️',
    },
    {
      id: 3,
      link: 'PROJECTS 💪🏽',
    },
    {
      id: 4,
      link: 'EXPERIENCE ⌨️',
    },
    {
      id: 5,
      link: 'CONTACT 📞',
    },
  ];
  const handleLogo = () => window.location.reload();
  return (

    <motion.nav
      variants={navVariants}
      initial="show"
      whileInView="show"
      className="relative z-10"
    >
      <div className="flex justify-between items-center w-full h-20 bg-transparent fixed cursor-pointer z-10">
        <div>
          <img
            onClick={handleLogo}
            className="w-12 h-auto mt-3 ml-6"
            src="/websiteLogo.png"
            alt="logo"
          />
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-blue-500 capitalize"
        >
          {nav ? <FaTimes size={30} color="#6366F1" /> : <FaBars size={30} color="#6366F1" />}
        </div>
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen bg-indigo-500 w-screen sm:w-[20%] z-10 text-gray-800 font-bold rounded-tl-lg rounded-tb-lg capitalize focus:outline">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize mr-[18%] py-4 text-xl">
              <Link
                onClick={() => setNav(!nav)}
                href={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    </motion.nav>

  );
};

export default Navbar;
