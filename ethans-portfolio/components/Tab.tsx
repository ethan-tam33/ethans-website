"use client"
import React from 'react';
import Link from 'next/link'

export default function Tab({href, text}: {href: string, text: string}) {
    return (
        <div className="mt-4 flex justify-end selection:bg-blue-100 dark:selection:bg-blue-500  ">
            <Link 
                href={href}
                className="relative text-black group font-mono dark:text-white"
            >
                {text}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-slate-700 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </Link>
        </div>
    );
}
