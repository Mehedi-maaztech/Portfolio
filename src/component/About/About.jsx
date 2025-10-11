import me from "../../assets/me.jpeg"
import js from "./Infoassetes/js.png"
import react from "./Infoassetes/react.png"
import git from "./Infoassetes/git-original.svg"
import github from './Infoassetes/github.png';
import html from "./Infoassetes/html-5.ff3cf75e3b7cbb4ea77c.png"
import css from "./Infoassetes/css-3.463e319bad8e0edf1ef7.png"
import mongodb from "./Infoassetes/mongo.png"
import tailwind from "./Infoassetes/tailwindcss.f4794572c6fe67ec71e0.png"
import bootstrap from "./Infoassetes/bootstrap.268c4375260420e8d982.png"
import express from "./Infoassetes/express.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        })
    }, [])

    return (
        <div className="min-h-[60vh]" id="about">
            <h1 className='text-6xl font-bold py-10'>About Me.</h1>
            <div className='flex flex-col lg:flex-row-reverse gap-8 mt-8 justify-between'>
                {/* <div className="w-full lg:w-[35%] text-center lg:text-right pb-7">
                    <img
                        data-aos="fade-left"
                        src={me}
                        alt="Mehedi Hasan"
                        className="h-[300px] rounded border-2 border-cyan-950 mx-auto lg:mx-0"
                    />
                </div> */}

                <div className="w-full lg:w-2/5 pb-7 flex justify-center lg:justify-end">
                    <img
                        data-aos="fade-left"
                        src={me}
                        alt="Mehedi Hasan"
                        className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded object-cover border-2 border-cyan-950 shadow-xl" loading="lazy"
                    />
                </div>

                <div data-aos="fade-right" className="w-full lg:w-[65%] tracking-wide grid gap-5 text-center lg:text-left">
                    <p>Hello! I’m Mehedi Hasan, and I have a passion for building things on the web. I’m deeply interested in web development and continually work on improving my skills. I have experience with HTML, CSS, JavaScript, React JS and responsive web design. <br /> <br />

                        In terms of design, I am skilled HTML5, CSS3, JavaScript, and React, using frameworks like Bootstrap and Tailwind CSS. On the development side, I work with Express.js and MongoDB to create dynamic and efficient web applications.

                        Here are some of the technologies I’ve been working with recently:</p>

                    <div className="grid grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 md:w-[65%]  mt-4 mx-auto lg:mx-0">
                        <div className="text-center">
                            <img src={js} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">JavaScript</p>
                        </div>
                        <div className="text-center">
                            <img src={react} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">React</p>
                        </div>
                        <div className="text-center">
                            <img src={git} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">Git</p>
                        </div>
                        <div className="text-center">
                            <img src={github} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">Github</p>
                        </div>
                        <div className="text-center">
                            <img src={html} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">Html</p>
                        </div>
                        <div className="text-center">
                            <img src={css} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">CSS</p>
                        </div>
                        <div className="text-center">
                            <img src={tailwind} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">Tailwindcss</p>
                        </div>
                        <div className="text-center">
                            <img src={bootstrap} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">Bootstrap</p>
                        </div>
                        <div className="text-center">
                            <img src={mongodb} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">MongoDB</p>
                        </div>
                        <div className="text-center">
                            <img src={express} alt=""
                                className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                            />
                            <p className="text-sm font-medium pt-3">Express</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;