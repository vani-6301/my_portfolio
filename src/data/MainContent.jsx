import { HandWavingIcon } from "@phosphor-icons/react";
import "../styles/MainContent.css";
import resume from "../files/Vanishree_Resume.pdf";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma
} from "react-icons/fa";

import {
    SiJavascript,
    SiRedux,
    SiReactrouter,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiNpm,
    SiAxios,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
    TbApi,
    TbBrandChrome,
    TbShieldLock
} from "react-icons/tb";

function MainContent() {

    const frontendSkills = [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React Hooks", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Context API", icon: <FaReact /> },
        { name: "React Router", icon: <SiReactrouter /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "Axios", icon: <SiAxios /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: <MdOutlineDashboardCustomize /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "JWT Authentication", icon: <TbShieldLock /> },
    ];
    const toolsSkills = [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "DevTools", icon: <TbBrandChrome /> },
        { name: "npm", icon: <SiNpm /> },
        { name: "Figma", icon: <FaFigma /> },
    ];


    const journey = [
        {
            icon: "⚛",
            title: "Frontend Development",
            points: [
                "Developed React-based enterprise web applications",
                "Built responsive and reusable UI components",
                "Integrated REST APIs and collaborated with backend teams",
                "Worked with clients to understand requirements and deliver features"
            ],
            tech: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "REST APIs"
            ]
        },
        {
            icon: "🚀",
            title: "Expanding into full stack Development",
            points: [
                "Contributed to backend development using Node.js and Express.js",
                "Worked with MongoDB for application data",
                "Collaborated on full stack application development",
                "Continuously building MERN Stack expertise through hands-on projects"
            ],
            tech: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "MERN Stack"
            ]
        }
    ];

    const projects = [
        {
            title: "MERN Procurement System",
            tech: ["React", "Node.js", "Express.js", "MongoDB"],
            description:
                "Contributed to the development of a procurement management system by building React interfaces, integrating REST APIs, collaborating on backend features, and implementing approval workflow modules."
        },

        {
            title: "Internal Feedback Management System",
            tech: ["React", "JavaScript", "REST APIs"],
            description:
                "Developed responsive frontend features, integrated APIs, and collaborated with the team to build an internal feedback platform with project management and notification modules."
        },

        {
            title: "LMG8 Corporate Website",
            tech: ["React", "JavaScript", "Responsive Design"],
            description:
                "Developed responsive business website pages with a focus on performance, accessibility, and cross-device compatibility."
        },

        {
            title: "Myhraki E-Commerce Platform",
            tech: ["React", "JavaScript", "REST APIs"],
            description:
                "Contributed to the frontend development of an e-commerce platform by building responsive interfaces and integrating APIs for seller and product management."
        }
    ];

    return (
        <div className="flex flex-col items-center w-full pt-24 px-4 sm:px-6">

            {/* HERO / ABOUT SECTION */}

            <div className="flex flex-col items-center scroll-mt-24">

                <div className="flex flex-wrap justify-center items-center gap-3 text-3xl sm:text-4xl md:text-[38px] font-bold text-white text-center">
                    <span>Hi, I’m Vanishree</span>
                    <HandWavingIcon size={40} color="#FAB95B" weight="fill" className="wave" />
                </div>

                <div className="max-w-3xl text-center mt-6 space-y-4">

                    <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
                        FRONTEND DEVELOPER
                    </p>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        Frontend developer with <span className="text-white font-semibold">2+ years of experience </span>
                        building enterprise React applications, reusable UI components and REST API integrations.
                        Currently expanding into <span className="text-blue-400 font-semibold">MERN Stack </span>
                        through backend development and full stack projects.
                    </p>

                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6 w-full sm:w-auto">
                    <a
                        href="#projects"
                        className="px-5 py-3 text-center bg-[#1A3263] text-white rounded-lg hover:bg-[#16264d] transition"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"

                        className="px-5 py-3 text-center border border-[#1A3263] text-white rounded-lg hover:bg-[#1A3263] hover:text-white transition"
                    >
                        Get In Touch
                    </a>



                </div>

            </div>


            {/* SKILLS */}

            <div id="skills" className="flex items-center my-10 w-full max-w-5xl scroll-mt-24 px-2">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-lg sm:text-xl text-white whitespace-nowrap"> <div className="text-slate-400 uppercase tracking-[0.3em] text-sm">
                    Tech Stack
                </div></div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-5xl w-full space-y-5">

                <SkillSection title="Frontend" skills={frontendSkills} color="hover:shadow-blue-200" font="text-slate-300" />

                <SkillSection title="Backend" skills={backendSkills} color="hover:shadow-[#EBD6FB]" font="text-[#52357B]" />

                <SkillSection title="Tools" skills={toolsSkills} color="hover:shadow-[#DDF4E7]" font="text-[#215E61]" />

            </div>


            {/* EXPERIENCE */}

            <div id="experience" className="flex items-center my-12 w-full max-w-4xl scroll-mt-24">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-lg sm:text-xl text-slate-400 whitespace-nowrap">Experience</div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full">

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white">LMG 8 Tech</h3>
                    <p className="text-slate-300 font-medium">Front-End Developer</p>
                    <p className="text-sm text-gray-500">Feb 2024 – Apr 2026</p>
                </div>

                <div className="relative">

                    <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-300 to-purple-300"></div>

                    <div className="space-y-10">

                        {journey.map((step, index) => (

                            <div key={index} className="flex items-start gap-6">

                                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-400 text-sm">
                                    {step.icon}
                                </div>

                                <div>

                                    <h4 className="font-semibold text-white mb-2">
                                        {step.title}
                                    </h4>

                                    <ul className="text-sm text-slate-400 space-y-1 mb-2">
                                        {step.points.map((p, i) => (
                                            <li key={i}>• {p}</li>
                                        ))}
                                    </ul>

                                    <p className="text-xs text-slate-300">
                                        {step.tech.join(" • ")}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>


            {/* PROJECTS */}

            <div id="projects" className="flex items-center my-12 w-full max-w-4xl scroll-mt-24">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-lg sm:text-xl text-slate-400 whitespace-nowrap">Projects</div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full space-y-12">

                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}

                </div>

            </div>


            {/* CONTACT */}

            <div id="contact" className="flex items-center my-12 w-full max-w-4xl scroll-mt-24">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-lg sm:text-xl text-white whitespace-nowrap"><h2 className="text-3xl font-bold text-white">
                    Let's Connect
                </h2>

                    <p className="text-slate-400 mt-3">
                        I'm currently open to Frontend and MERN Stack opportunities.
                        Feel free to reach out if you'd like to work together.
                    </p></div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full text-center space-y-6 pb-16">

                {/* <p className="text-slate-400">
                    I’m currently looking for frontend or full stack developer opportunities. <br />
                    Feel free to reach out if you think I’d be a good fit for your team.
                </p> */}

                <div className="space-y-2 text-slate-300">

                    <a
                        href="mailto:vaninaravi07@gmail.com"
                        className="flex justify-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                    >
                        📧
                        <span>vaninaravi07@gmail.com</span>
                    </a>

                    <a
                        href="tel:+919535621820"
                        className="flex justify-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                    >
                        📱
                        <span>+91 9535621820</span>
                    </a>

                </div>

                <div className="flex justify-center gap-6 mt-6">

                    <a
                        href="https://www.linkedin.com/in/vanishree6301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-blue-600 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/vani-6301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-gray-600 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href={resume}
                        download
                        className="text-white font-medium hover:text-purple-600 transition"
                    >
                        Resume
                    </a>

                </div>

            </div>
            <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#1A3263] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#16264d] transition flex items-center gap-2 z-50"
            >
                📄 Resume
            </a>
        </div>
    );
}


function SkillSection({ title, skills, color, font }) {
    return (
        <div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

            <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => (
                    <SkillCard
                        key={i}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
}


function SkillCard({ name, icon }) {
    return (
        <div className="
            flex items-center gap-3
            px-5 py-4
            rounded-xl
            bg-slate-900
            border border-slate-700
            hover:border-cyan-400
            hover:-translate-y-1
            transition-all duration-300
        ">
            <span className="text-2xl text-cyan-400">
                {icon}
            </span>

            <span className="text-white font-medium">
                {name}
            </span>
        </div>
    );
}


function ProjectCard({ title, tech, description }) {
    return (
        <div className="
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            p-6
            hover:border-blue-500
            hover:-translate-y-2
            transition-all
            duration-300
        ">

            {/* <div className="
                h-40
                rounded-xl
                bg-slate-800
                mb-5
                flex
                items-center
                justify-center
                text-slate-500
            ">
                Project Screenshot
            </div> */}

            <h3 className="text-2xl font-semibold text-white">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2 mt-4 mb-5">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="
                            px-3
                            py-1
                            rounded-full
                            bg-blue-500/10
                            text-blue-400
                            text-xs
                        "
                    >
                        {item}
                    </span>
                ))}
            </div>

            <p className="text-slate-400 leading-7">
                {description}
            </p>
        </div>
    );
}

export default MainContent;