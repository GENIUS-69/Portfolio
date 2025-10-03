'use client';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <button
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white borde-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale[1.15] active:scale-105 transition-all hover:cursor-pointer'
      onClick={ThemeSwitch}
    >
      {
        theme === "light" ? (<BsSun />) : (<BsMoon />)
      }
    </button>
  )
}
