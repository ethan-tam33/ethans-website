"use client"
import React from 'react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <div className="mt-4 flex justify-end">
            {resolvedTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-gray-900 p-2 rounded-xl"
            >
              <RiMoonFill size={25} color="white" />
            </button>
          )}
        </div>
    )
}

export default ThemeToggle;