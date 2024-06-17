"use client"

import { useState, useEffect } from "react";
import { MdFormatAlignRight } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleSidebar = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 65) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="bg-white/70 backdrop-blur-lg z-[30] xl:py-5 py-3 xl:mx-5 xl:rounded-full fixed xl:top-5 left-0 right-0">
            <div className="px-10 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <div>
                        <h1 id="title" className="lg:text-5xl text-red-500 md:text-4xl text-3xl">Hunger</h1>
                    </div>
                    <div className="xl:block hidden">
                        <ul className="flex items-center text-lg font-semibold uppercase gap-5">
                            {['home', 'shop', 'trending', 'about', 'blog'].map((section) => (
                                <a key={section} href={`#${section}`}>
                                    <div className="relative cursor-pointer group">
                                        <li className="">{section.charAt(0).toUpperCase() + section.slice(1)}</li>
                                        <div className={`w-2 h-2 mx-auto absolute left-0 right-0 transition-all duration-500 rounded-full ${activeSection === section ? '    -bottom-3 opacity-100 bg-red-500' : '-bottom-full opacity-0'
                                            }`}>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="xl:block hidden">
                    <button className="hover:bg-red-500 transition-all duration-500 hover:text-white px-7 py-3 border-2 border-red-500 text-red-600 rounded-full uppercase font-bold">
                        View full menu
                    </button>
                </div>
                <div onClick={toggleSidebar} className="xl:hidden z-10 block text-3xl">
                    <span>
                        {open ? <RiCloseLargeFill /> : <MdFormatAlignRight />}
                    </span>
                </div>
                <div className={`xl:hidden block w-[70%] top-0 fixed bg-white min-h-dvh transition-all duration-500 ${open ? "right-0" : "-right-full"}`}>
                    {/* Sidebar content here */}
                </div>
            </div>
        </nav>
    );
}
