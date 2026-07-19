import React, { useEffect, useState } from 'react';
import {
    LinkedinLogoIcon,
    GithubLogoIcon,
    List,
    X
} from "@phosphor-icons/react";

import girl from "../assets/girl.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "About", link: "#top" },
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={`
fixed top-5 left-1/2 -translate-x-1/2
w-[94%] max-w-6xl rounded-2xl z-50
backdrop-blur-xl
transition-all duration-300
${scrolled
                    ? "bg-slate-950/80 shadow-2xl"
                    : "bg-slate-900/50"
                }
`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="https://vani-dev.netlify.app/"
                    className="flex items-center gap-3"
                    title="Home"
                >
                    <img
                        src={girl}
                        className="w-10 h-10 rounded-full border border-cyan-400"
                    />

                    <div>
                        <h1 className="text-white font-bold text-lg">
                            Vanishree
                        </h1>

                        <p className="text-gray-400 text-xs">
                            Frontend Developer
                        </p>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-[16px] font-medium">

                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="
relative
text-gray-300
hover:text-white
transition-all
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-cyan-400
after:transition-all
after:duration-300
hover:after:w-full
"
                        >
                            {item.name}
                        </a>
                    ))}

                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex items-center gap-4">

                    <a
                        href="https://github.com/vani-6301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
text-gray-300
hover:text-white
hover:scale-110
transition-all
duration-300
"
                    >
                        <GithubLogoIcon size={28} weight="fill" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vanishree6301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
text-gray-300
hover:text-white
hover:scale-110
transition-all
duration-300
"
                    >
                        <LinkedinLogoIcon size={28} weight="fill" />
                    </a>

                    <a
                        href="mailto:vaninaravi07@gmail.com"
                        className="
rounded-full
px-5
py-2
bg-[#1A3263]
text-white
font-medium
shadow-lg
shadow-cyan-500/30
hover:shadow-cyan-500/60
hover:scale-105
transition-all
duration-300
"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X size={30} weight="bold" />
                    ) : (
                        <List size={30} weight="bold" />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-2xl rounded-b-2xl px-6 py-5">

                    <div className="flex flex-col gap-5 text-center text-[17px] font-medium">

                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-300 hover:text-white transition-all"
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile Social Icons */}
                        <div className="flex justify-center gap-5 pt-2">

                            <a
                                href="https://www.linkedin.com/in/vanishree6301/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedinLogoIcon
                                    size={30}
                                    color="#ffffff"
                                    weight="fill"
                                />
                            </a>

                            <a
                                href="https://github.com/vani-6301"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubLogoIcon
                                    size={30}
                                    color="#ffffff"
                                    weight="fill"
                                />
                            </a>

                        </div>

                    </div>

                </div>
            )}
        </nav>
    );
}

export default Navbar;