"use client";
import Image from 'next/image';
import React from 'react';
import MyImg from '@/public/MyImg.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView("Home",0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} className='mb-28 max-w-[90rem] text-center sm:mb-0 scroll-mt-[100rem] ' id='home'>
      <div className='flex items-center justify-center'>

        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >

            <Image
              src={MyImg}
              alt="Sarthak portrait"
              width="250"
              height="250"
              priority={true}
              className="h-50 w-50 rounded-full object-cover border-[0.30rem] border-white shadow-2xl"
            />
          </motion.div>

        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Sarthak Hota.</span> I&apos;m a{" "}
        <span className="font-bold">Full-Stack developer</span> with{" "}
        <span className="font-bold">Real Life</span> of experience.<br /> I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="font-bold">Developing Scalable Solutions</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>

        <Link href='#contact' className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here {" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          className="bg-white p-4 text-black hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-black"
          href="https://www.linkedin.com/in/sarthak-hota/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="bg-white p-4 text-black hover:text-gray-950 flex items-center gap-2 text-[1.6rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-black"
          href="https://github.com/GENIUS-69"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>

      </motion.div>
      
    </section>
  );
}
