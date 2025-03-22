import Link from 'next/link';
import Projects from './Projects';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <div className='flex items-center justify-end space-x-8 p-4 fixed top-0 right-5 w-full selection:bg-blue-100 dark:selection:bg-blue-500'>
            <Projects></Projects>
            <ThemeToggle></ThemeToggle>
        </div>
    );
};

export default Navbar;
