"use client";

import React from 'react'
import SectionHeading from '@/components/section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section className="w-full px-4 sm:px-8 scroll-mt-28 mb-20 sm:mb-28" ref={ref} id='projects'>
      <SectionHeading>My Projects</SectionHeading>

      <div className="flex flex-col items-center gap-8">
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bg-gray-100 w-full max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] flex flex-col sm:flex-row">
      {/* Content Section */}
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tag}</li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="relative w-full sm:w-[50%]">
        <Image
          src={imageUrl}
          alt="Project image"
          className="w-full h-auto rounded-t-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
