import React, { useState } from 'react';
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
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#EFF6FF] to-white text-[#0245A3] z-50 shadow-sm">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#top" className="flex items-center gap-2">
                    <img
                        src={girl}
                        alt="Vanishree logo"
                        className="w-10 h-10 object-contain"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[17px] font-medium">

                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="hover:text-blue-600 transition duration-200"
                        >
                            {item.name}
                        </a>
                    ))}

                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex items-center gap-4">

                    <a
                        href="https://www.linkedin.com/in/vanishree6301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition"
                    >
                        <LinkedinLogoIcon
                            size={30}
                            color="#0245a3"
                            weight="fill"
                        />
                    </a>

                    <a
                        href="https://github.com/vani-6301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition"
                    >
                        <GithubLogoIcon
                            size={30}
                            color="#0245a3"
                            weight="fill"
                        />
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
                <div className="md:hidden bg-white shadow-md px-6 py-5">

                    <div className="flex flex-col gap-5 text-center text-[17px] font-medium">

                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-blue-600 transition"
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
                                    color="#0245a3"
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
                                    color="#0245a3"
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