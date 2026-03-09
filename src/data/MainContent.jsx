import { HandWavingIcon } from "@phosphor-icons/react";
import "../styles/MainContent.css";
import resume from "../files/Vanishree_Resume.pdf";
function MainContent() {

    const frontendSkills = ["React", "Redux", "JavaScript", "HTML", "CSS", "Tailwind"];
    const backendSkills = ["Node.js", "Express", "MongoDB"];
    const toolsSkills = ["Git", "GitHub", "Postman", "VS Code"];

    const journey = [
        {
            icon: "⚛",
            title: "Frontend Development",
            points: [
                "Built responsive dashboards",
                "Integrated REST APIs",
                "Developed reusable components"
            ],
            tech: ["React", "Tailwind", "ApexCharts"]
        },
        {
            icon: "🛠",
            title: "Expanding to Full-Stack",
            points: [
                "Learning Node.js",
                "Building REST APIs",
                "Working with MongoDB"
            ],
            tech: ["Node.js", "Express", "MongoDB"]
        }
    ];

    const projectSections = [
        {
            title: "Web Applications",
            projects: [
                {
                    title: "Client Project – Procurement System",
                    tech: ["ReactJS", "NodeJS", "MongoDB", "JavaScript", "CSS"],
                    description:
                        "Developed and implemented a full-stack procurement system to streamline purchasing workflows including requisitions, order creation, supplier management, and invoice processing."
                },
                {
                    title: "Company Internal Project – Feedback Web App",
                    tech: ["ReactJS", "JavaScript", "CSS"],
                    description:
                        "Built a responsive internal feedback management application featuring an admin portal for handling project details, questionnaires, and automated notifications."
                }
            ]
        },
        {
            title: "Websites",
            projects: [
                {
                    title: "Company Internal Project – Official Website",
                    tech: ["ReactJS", "JavaScript", "CSS"],
                    description:
                        "Developed responsive and SEO-friendly business websites ensuring performance optimization, accessibility, and smooth cross-device compatibility.",
                    link: "https://www.lmg8.tech/"
                }
            ]
        },
        {
            title: "E-Commerce",
            projects: [
                {
                    title: "Myhraki – E-commerce Platform",
                    tech: ["ReactJS", "JavaScript", "CSS"],
                    description:
                        "Developed a dynamic e-commerce platform enabling sellers to upload and manage boutique products with dashboards and logistics modules.",
                    link: "https://myhraki.com/"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center w-full pt-20">

            {/* HERO / ABOUT SECTION */}

            <div className="flex flex-col items-center scroll-mt-24">

                <div className="flex justify-center items-center gap-4 text-[38px] font-bold text-[#1A3263]">
                    <span>Hi, I’m Vanishree</span>
                    <HandWavingIcon size={40} color="#FAB95B" weight="fill" className="wave" />
                </div>

                <div className="text-[16px] text-[#547792] text-center mt-2">
                    <p>Frontend Developer building modern React applications.</p>
                    <p>Currently expanding into Full-Stack development with Node.js & MongoDB.</p>
                </div>

                <div className="flex justify-center gap-8 mt-6">

                    <a
                        href="#contact"
                        className="px-5 py-2 bg-[#1A3263] text-white rounded-lg hover:bg-[#16264d] transition"
                    >
                        Get In Touch
                    </a>

                    <a
                        href="#projects"
                        className="px-5 py-2 border border-[#1A3263] text-[#1A3263] rounded-lg hover:bg-[#1A3263] hover:text-white transition"
                    >
                        Projects
                    </a>

                </div>

            </div>


            {/* SKILLS */}

            <div id="skills" className="flex items-center my-12 w-full max-w-4xl scroll-mt-24">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-xl text-[#1A3263]">Skills</div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full space-y-10">

                <SkillSection title="Frontend" skills={frontendSkills} color="hover:shadow-blue-200" font="text-[#5459AC]" />

                <SkillSection title="Backend" skills={backendSkills} color="hover:shadow-[#EBD6FB]" font="text-[#52357B]" />

                <SkillSection title="Tools" skills={toolsSkills} color="hover:shadow-[#DDF4E7]" font="text-[#215E61]" />

            </div>


            {/* EXPERIENCE */}

            <div id="experience" className="flex items-center my-12 w-full max-w-4xl scroll-mt-24">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-xl text-[#1A3263]">Experience</div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full">

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#1A3263]">LMG 8 Tech</h3>
                    <p className="text-[#5459AC] font-medium">Front-End Developer</p>
                    <p className="text-sm text-gray-500">Feb 2024 – Present</p>
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

                                    <h4 className="font-semibold text-[#1A3263] mb-2">
                                        {step.title}
                                    </h4>

                                    <ul className="text-sm text-[#547792] space-y-1 mb-2">
                                        {step.points.map((p, i) => (
                                            <li key={i}>• {p}</li>
                                        ))}
                                    </ul>

                                    <p className="text-xs text-[#5459AC]">
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
                <div className="mx-4 font-semibold text-xl text-[#1A3263]">Projects</div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full space-y-12">

                {projectSections.map((section, index) => (

                    <div key={index}>

                        <h2 className="text-lg font-semibold text-[#1A3263] mb-4">
                            {section.title}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            {section.projects.map((project, i) => (
                                <ProjectCard key={i} {...project} />
                            ))}

                        </div>

                    </div>

                ))}

            </div>


            {/* CONTACT */}

            <div id="contact" className="flex items-center my-12 w-full max-w-4xl scroll-mt-24">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-4 font-semibold text-xl text-[#1A3263]">Get In Touch</div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="max-w-4xl w-full text-center space-y-6 pb-16">

                <p className="text-[#547792]">
                    I’m currently looking for frontend or full-stack developer opportunities. <br />
                    Feel free to reach out if you think I’d be a good fit for your team.
                </p>

                <div className="space-y-2 text-[#5459AC]">

                    <p className="flex justify-center gap-2">
                        📧 <span>vaninaravi07@gmail.com</span>
                    </p>

                    <p className="flex justify-center gap-2">
                        📱 <span>+91 9535621820</span>
                    </p>

                </div>

                <div className="flex justify-center gap-6 mt-6">

                    <a
                        href="https://www.linkedin.com/in/vanishree6301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A3263] font-medium hover:text-blue-600 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/vani-6301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A3263] font-medium hover:text-gray-600 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href={resume}
                        download
                        className="text-[#1A3263] font-medium hover:text-purple-600 transition"
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
            <h3 className="text-lg font-bold text-[#1A3263] mb-4">{title}</h3>

            <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => (
                    <SkillCard key={i} name={skill} color={color} font={font} />
                ))}
            </div>
        </div>
    );
}


function SkillCard({ name, color, font }) {
    return (
        <div className={`px-5 py-3 bg-white rounded-xl border border-gray-200
        shadow-sm cursor-pointer transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:scale-105 hover:shadow-lg ${color} hover:font-bold`}>
            <span className={`text-sm font-medium ${font}`}>
                {name}
            </span>
        </div>
    );
}


function ProjectCard({ title, tech, description, link }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300">

            <h3 className="text-[#2563eb] font-semibold mb-1">
                {title}
            </h3>

            <p className="text-xs text-gray-500 mb-3">
                {tech.join(", ")}
            </p>

            <p className="text-sm text-[#547792] leading-relaxed">
                {description}
            </p>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                    View Project →
                </a>
            )}

        </div>
    );
}

export default MainContent;