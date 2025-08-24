import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        })
    }, [])
    return (
        <div className="my-10" id="contact" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <h1 className='text-6xl font-bold py-10'>Contact.</h1>
            <div className="flex flex-col sm:flex-col-reverse lg:flex-row gap-10">
                <div className="flex-1 space-y-10">
                    <p>I’m open to freelance opportunities, particularly ambitious or large-scale projects. If you have a request or question, feel free to reach out through the contact form.</p>
                    <p className="text-3xl">Get in Touch</p>
                    <div className="flex flex-col">
                        <a className="flex gap-2 items-center text-[18px] hover:text-white transition" href="tel:01869990501"> <FaPhoneAlt />01869990501</a>
                        <a href="mailto:mehedihassan86999@gmail.com" className="flex gap-2 items-center text-[18px] hover:text-white transition"> <MdEmail />
                            mehedihassan86999@gmail.com</a>
                    </div>
                    <div className="flex gap-5 pt-5 m-5">
                        <a target="_black" href="https://github.com/Mehedi-maaztech?tab=repositories" className="text-[18px] hover:text-white transition-all border-2 p-2"><FaGithub /></a>
                        <a target="_black" href="https://www.linkedin.com/in/mehedi-hasan-200213202/" className="text-[18px] hover:text-white transition-all border-2 p-2"><GrLinkedin /></a>
                        <a target="_black" href="https://www.facebook.com/share/173dGyPPG6/?mibextid=wwXIfr" className="text-[18px] hover:text-white transition-all border-2 p-2"><ImFacebook2 /></a>
                    </div>
                </div>
                <div className="flex-1">
                    <form>
                        <div className="border-b border-white/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-white">Personal Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-400">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-950 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-950 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-full">
                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-950 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="w-full flex justify-center">
                                <button className="btn btn-soft btn-wide mt-5 justify-center">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;