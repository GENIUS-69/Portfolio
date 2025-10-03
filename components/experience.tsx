"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#9ca3af">
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{ background: '#ffffff', color: '#000000', fontSize: '1.5rem' }}
              >
                <h3 className='!font-extrabold capitalize'>{item.title}</h3>
                <h4 className='!font-bold'>{item.company}</h4>
                <p className='!font-normal !mt-0'>{item.location}</p>
                <p className='text-gray-400 !mt-1 !font-medium'>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}
