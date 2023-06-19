'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div className="mb-10">
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-indigo-900">
            Let's start a conversation 💬
          </h4>

          <span className="text-indigo-900">Email 📧:</span>
          <h1 className="mb-2  text-black">aswinmalla12@gmail.com</h1>
          <span className="text-indigo-900">Phone 📞:</span>
          <h1 className="pb-3 text-black">(720)-418-1221</h1>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <form
          action="https://getform.io/f/a012141e-4460-45a9-9393-bb60cc0767c2"
          method="POST"
          className=" flex flex-col w-full md:w-1/2"
        >
          <h1 className="text-2xl mb-4 text-indigo-900 font-bold">
            Please fill out all sections
          </h1>
          <input
            required
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            required
            type="text"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            required
            name="message"
            placeholder="Enter your message"
            rows="6"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-indigo-500 border-2 border-indigo-500 hover:border-green-600 rounded-md text-white hover:font-bold mt-4 hover:text-black hover:bg-green-400 focus:outline-none"
          >
            Send 🚀
          </button>
        </form>

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[1%] -top-[3%]"
        >
          <img
            src="/conversation.webp"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
