import ThemeToggle from './ThemeToggle';
import Tab from './Tab';

export default function Navbar() {
    return (
        <div className='flex flex-wrap items-center justify-end space-x-8 pr-4 fixed top-0 right-5 w-full h-16 selection:bg-blue-100 dark:selection:bg-blue-500'>    
            <Tab href="/" text="Home"></Tab>
            <Tab href="/experience" text="Experience"></Tab>
            <Tab href="/projects" text="Projects"></Tab>
            <Tab href="/classes" text="Classes"></Tab>
            <Tab href="/blog" text="Blog"></Tab>
            <ThemeToggle></ThemeToggle>
        </div>
    );
};
