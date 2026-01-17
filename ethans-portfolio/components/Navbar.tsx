"use client"
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Tab from './Tab';
import { IoReorderThreeOutline } from 'react-icons/io5';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <div className='hidden md:flex flex-wrap items-center justify-end space-x-8 pr-4 fixed top-0 right-5 w-full h-16 selection:bg-blue-100 dark:selection:bg-blue-500 z-50'>    
                <Tab href="/" text="Home"></Tab>
                <Tab href="/experience" text="Experience"></Tab>
                <Tab href="/projects" text="Projects"></Tab>
                <Tab href="/classes" text="Classes"></Tab>
                <Tab href="/blog" text="Blog"></Tab>
                <ThemeToggle></ThemeToggle>
            </div>

            <div className='md:hidden fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 selection:bg-blue-100 dark:selection:bg-blue-500 z-50'>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='text-4xl text-black dark:text-white'
                    aria-label='Toggle menu'
                >
                    <IoReorderThreeOutline />
                </button>
                <ThemeToggle></ThemeToggle>
            </div>

            {isMobileMenuOpen && (
                <div
                    className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-30'
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <div
                className={`md:hidden fixed top-16 left-0 bg-white dark:bg-gray-900 shadow-lg z-40 w-fit min-w-[200px] transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <div className='flex flex-col py-4 px-6 space-y-2'>
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <Tab href="/" text="Home"></Tab>
                    </div>
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <Tab href="/experience" text="Experience"></Tab>
                    </div>
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <Tab href="/projects" text="Projects"></Tab>
                    </div>
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <Tab href="/classes" text="Classes"></Tab>
                    </div>
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <Tab href="/blog" text="Blog"></Tab>
                    </div>
                </div>
            </div>
        </>
    );
};
