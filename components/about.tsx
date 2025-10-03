"use client";

import React from 'react'
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About",0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my Masters degree in Master of Computer Application(M.C.A) to further my passion for software engineering. I have strong foundations
        in{" "}
        <span className="font-medium">data structures and algorithms</span>{" "}
        and expertise in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        building scalable, user-focused solutions and solving challenging
        problems. I love the process of
        optimizing systems and seeing them work efficiently. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Prisma, and tools like Cypress,
        Postman, JUnit, and Jest. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        exploring new skills and experiences. I like playing video games,
        watching movies, and spending time with friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>, such as{" "}
        <span className="font-medium">cloud computing, AI/ML, and UX
          design</span>, which I’ve explored through certifications. I’m also
        passionate about{" "}
        <span className="font-medium">history and philosophy</span>.
      </p>

    </motion.section>
  )
}
