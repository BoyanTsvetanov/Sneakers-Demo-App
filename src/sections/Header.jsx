import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { navLinks } from '../constants'
import clsx from 'clsx'
import { Link as LinkScroll } from "react-scroll";
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32)
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }
      }, [])


      const NavLink = ({ title }) => (
        <LinkScroll
          onClick={() => setIsOpen(false)}
          to={title}
          offset={-100}
          spy
          smooth
          activeClass="nav-active"
          className='font-montserrat leading-normal font-bold hover:underline z-10 cursor-pointer'
        >
          {title}
        </LinkScroll>
      );

      const [darkMode, setDarkMode] = useState(false);

        // Load theme from localStorage on mount
        useEffect(() => {
            const savedTheme = localStorage.getItem('theme') === 'dark';
            setDarkMode(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme);
        }, []);

        // Toggle theme and save to localStorage
        const toggleTheme = () => {
            const newTheme = !darkMode;
            setDarkMode(newTheme);
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', newTheme);
        };


    return (
        <header className={clsx('px-16 max-md:px-8 fixed z-50 w-full transition-all duration-500',
            hasScrolled ? 'py-2 max-md:py-1 not-dark:bg-dark dark:bg-[hsl(259,77%,25%)]' : 'py-6 md:py-4 max-md:py-2')}>
            <nav className='flex justify-between items-center max-md:justify-between'>
            <a href='/' className=''>
                <img src="./icons/logo-light.png" alt="logo" width={130}/>
            </a>
            
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-light dark:bg-dark transition-colors"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <ul className={clsx('flex justify-center text-light text-xl items-center gap-16 max-lg:opacity-0 max-lg:absolute max-lg:flex-col max-lg:bg-light max-lg:text-4xl max-lg:text-primary-dark max-lg:w-[100%] max-lg:h-screen max-lg:top-0 max-lg:right-0 max-lg:bg-gradient-to-br from-accent-green to-[hsl(259,77%,25%)] max-lg:size-8 max-lg:bor', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
                {navLinks.map((item) => (
                    <li key={item.label} className='z-10 hover:text-light'>
                    <NavLink title={item.label}
                        className='font-montserrat leading-normal font-bold hover:underline z-10'
                    >
                    </NavLink>
                    </li>
                ))}
                
                <div className='hidden max-lg:block w-full h-full inset-0 absolute bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_2px,transparent_2px)] bg-[size:24px_24px] z-0'>
                   <img src="./images/slidebar.png" alt="slidebar" className='absolute w-full object-contain h-full' /> 
                </div>
                {/* <li className='hover:underline'><a href="/"></a></li>
                <li>•</li>
                <li className='hover:underline'>Мъже</li>
                <li>•</li>
                <li className='hover:underline'>Жени</li>
                <li>•</li>
                <li className='hover:underline'>Деца</li> */}
            </ul>

            <div className='flex  p-1 rounded gap-1 items-center'>
                <Button title="количка" icon="./icons/cart.png"></Button>
                <div className='w-0.25 h-[24px] bg-light'></div>
                <Link to="/Profile"><Button title="профил" icon="./icons/user-profile.png"></Button></Link>
            </div>

            <button className='hidden max-lg:block z-10' onClick={() => setIsOpen((prevState) => !prevState)}>
                <img src={`./icons/${isOpen ? 'close' : 'hamburger'}.svg`} alt="menu" className={clsx('p-1', hasScrolled && 'not-dark:bg-light')} />
            </button>
            
            </nav>
        </header>
    );
    
}

export default Header