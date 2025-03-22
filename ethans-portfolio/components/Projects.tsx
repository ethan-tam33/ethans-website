"use client"
import React from 'react';

export default function Projects() {
    return (
        <div className="mt-4 flex justify-end selection:bg-blue-100 dark:selection:bg-blue-500  ">
            <a 
                href="/projects" 
                className="relative text-slate-700 group font-mono dark:text-white"
            >
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-slate-700 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
        </div>
    );
}
