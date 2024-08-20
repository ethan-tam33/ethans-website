"use client"
import React from 'react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
    // const { systemTheme, theme, setTheme } = useTheme();
    // const currentTheme = theme === "system" ? systemTheme : theme;
    const { setTheme, resolvedTheme } = useTheme();
    // console.log('systemTheme: ', systemTheme);
    // console.log('theme: ', theme);

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
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
    )
}

export default ThemeToggle;