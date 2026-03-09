import React from 'react';
import { HouseLineIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import girl from "../assets/girl.png";

function Navbar() {

    const menuItems = [
        // { name: "About Me", link: "#top" }, 
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" }
    ];

    return (
        <div className='fixed top-0 w-full bg-gradient-to-b from-[#EFF6FF] to-[#ffffff] p-4 flex items-center justify-between text-[#0245A3] z-50'>

            {/* Logo */}

            <a href="#top" className='flex gap-2 items-center font-semibold'>
                <img src={girl} alt="Vanishree logo" className="w-10 h-10 ml-5 object-contain" />
                <div></div>
            </a>

            {/* Menu */}

            <div className='flex items-center gap-6 text-[18px]'>

                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="cursor-pointer hover:text-blue-600 transition"
                    >
                        {item.name}
                    </a>
                ))}

            </div>

            {/* Social Links */}

            <div className="flex items-center gap-4">

                <a
                    href="https://www.linkedin.com/in/vanishree6301/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinLogoIcon size={32} color="#0245a3" weight="fill" />
                </a>

                <a
                    href="https://github.com/vani-6301"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubLogoIcon size={32} color="#0245a3" weight="fill" />
                </a>

            </div>

        </div>
    );
}

export default Navbar;