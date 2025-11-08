import me from "../../assets/me.jpeg";
import js from "./Infoassetes/js.png";
import react from "./Infoassetes/react.png";
import git from "./Infoassetes/git-original.svg";
import github from "./Infoassetes/github.png";
import html from "./Infoassetes/html-5.ff3cf75e3b7cbb4ea77c.png";
import css from "./Infoassetes/css-3.463e319bad8e0edf1ef7.png";
import mongodb from "./Infoassetes/mongo.png";
import tailwind from "./Infoassetes/tailwindcss.f4794572c6fe67ec71e0.png";
import bootstrap from "./Infoassetes/bootstrap.268c4375260420e8d982.png";
import express from "./Infoassetes/express.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section
            id="about"
            className="min-h-screen bg-base-100 text-base-content flex flex-col justify-center px-6 md:px-10 lg:px-20 py-16"
        >
            {/* Title */}
            <div data-aos="fade-up" className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    About Me<span className="">.</span>
                </h1>
                <p className="text-base md:text-lg max-w-3xl mx-auto">
                    A little introduction about my journey and the technologies I love.
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
                {/* Left: Text */}
                <div
                    data-aos="fade-right"
                    className="w-full lg:w-3/5 text-center lg:text-left space-y-5 leading-relaxed"
                >
                    <div className="text-base sm:text-base md:text-lg leading-relaxed space-y-4 px-2 sm:px-4 lg:px-0">
                        <p>
                            Hello! I’m <span className="font-semibold">Mehedi Hasan</span>, a passionate web developer who loves turning ideas into interactive experiences. I enjoy crafting clean, efficient, and user-friendly web applications using modern technologies.
                        </p>

                        <p>
                            I specialize in <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, and <span className="font-semibold">React.js</span> — complemented by tools like <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">Bootstrap</span>, <span className="font-semibold">Express.js</span>, and <span className="font-semibold">MongoDB</span>. My goal is to create seamless, responsive, and visually appealing user experiences.
                        </p>
                    </div>

                    <p className="font-medium pt-4">
                        <span className="">Technologies I use regularly:</span>
                    </p>

                    {/* Tech grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 justify-items-center mt-6">
                        {[
                            { src: js, name: "JavaScript" },
                            { src: react, name: "React" },
                            { src: git, name: "Git" },
                            { src: github, name: "GitHub" },
                            { src: html, name: "HTML" },
                            { src: css, name: "CSS" },
                            { src: tailwind, name: "Tailwind" },
                            { src: bootstrap, name: "Bootstrap" },
                            { src: mongodb, name: "MongoDB" },
                            { src: express, name: "Express" },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="text-center hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="h-[40px] sm:h-[45px] mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-xs sm:text-sm font-medium pt-2 ">
                                    {tech.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Image */}
                <div
                    data-aos="fade-left"
                    className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                >
                    <img
                        src={me}
                        alt="Mehedi Hasan"
                        className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl object-cover border-2 border-gray-500 shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
