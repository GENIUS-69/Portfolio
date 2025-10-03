"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { contactMe } from '@/lib/data';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  })
};



export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.25);

  return (
    <motion.section
      id='contact'
      className='scroll-mt-28 mb-20 sm:mb-28'
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className='w-full max-w-[80rem] mx-auto px-4 sm:px-0 text-center'>
        <h4 className='text-gray-700 font-semibold my-4 dark:text-gray-400'>
          Please Contact me directly through this.
        </h4>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            contactMe.map((contactval, index) => (
              <Link href={contactval.contactUrl} key={index} target='_blank'>
                <motion.li
                  className='bg-gray-900 border border-black/[0.1] rounded-xl px-3 py-3 text-white flex items-center justify-center w-[10rem] gap-2 dark:bg-gray-300 dark:text-gray-800'
                  variants={fadeInAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true
                  }}
                  custom={index}
                >
                  <span className="text-xl">{contactval.icon}</span> {/* Adjust icon size */}
                  <span className="text-xl font-semibold">{contactval.name}</span> {/* Render the contact name */}
                </motion.li>
              </Link>
            ))
          }
        </ul>
      </div>

    </motion.section>
  )
}
