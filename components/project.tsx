"use client";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}>
      <section
        className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] flex flex-col sm:flex-row even:pl-8 hover:bg-gray-200 transition'
      >

        {/* Content Section */}
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[30%] flex flex-col h-full group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>

          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>

          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <Image
          src={imageUrl}
          alt="Project image"
          className='
          relative sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem] sm:rounded-t-lg sm:shadow-2xl w-full rounded-t-lg shadow-2xl 
          transition
        group-even:right-[initial] 
        group-even:-left-40 
        group-hover:-translate-x-3
        group-hover:-translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.04]

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
          '
        />
      </section>
    </motion.div>

  );
}
