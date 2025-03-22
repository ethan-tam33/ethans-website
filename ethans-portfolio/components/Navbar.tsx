import ThemeToggle from './ThemeToggle';
import Tab from './Tab';

export default function Navbar() {
    return (
        <div className='flex items-center justify-end space-x-8 p-4 fixed top-0 right-5 w-full h-16 selection:bg-blue-100 dark:selection:bg-blue-500'>

            <Tab href="/" text="Home"></Tab>
            <Tab href="/projects" text="Projects"></Tab>
            <ThemeToggle></ThemeToggle>
        </div>
    );
};
