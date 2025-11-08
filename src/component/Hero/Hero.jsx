import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import Lottie from "lottie-react";
import "./Hero.css";
import lottieanime from "../../assets/Main Scene.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const pdfUrl =
        "https://drive.google.com/file/d/1u4pgzV45UtEj43r7Q8mpzxrj-Y51fbOH/view";
    const pdfDownload =
        "https://drive.usercontent.google.com/u/0/uc?id=1u4pgzV45UtEj43r7Q8mpzxrj-Y51fbOH&export=download";

    return (
        <section
            id="home"
            className="hero bg-base-100 min-h-[90vh] flex items-center px-4 sm:px-8 md:px-16 lg:px-24"
        >
            <div className="hero-content flex flex-col lg:flex-row-reverse w-full justify-between items-center gap-10 lg:gap-16">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 max-w-lg" data-aos="fade-in">
                    <Lottie animationData={lottieanime} loop={true} />
                </div>

                {/* Text Content */}
                <div
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 text-center lg:text-left"
                    data-aos="fade-in"
                >
                    <p className="text-lg sm:text-xl md:text-2xl">Hi, my name is</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        Mehedi <span className="text-white">Hasan.</span>
                    </h1>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Front-End Developer
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg leading-relaxed">
                        I like to know and understand modern technology. Since then I have
                        been working on improving my skills in web development. When I
                        start any work, I finish it with dedication.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                        <button
                            onClick={() => window.open(pdfUrl, "_blank")}
                            className="btn btn-soft border-cyan-950 text-sm sm:text-base"
                        >
                            Check Out My Resume!
                        </button>
                        <button
                            onClick={() => window.open(pdfDownload, "_blank")}
                            className="btn btn-soft border-cyan-950 text-sm sm:text-base"
                        >
                            Download PDF
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 mt-4 text-xl">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Mehedi-maaztech"
                            className=" transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/mehedi-hasan-200213202/"
                            className=" transition-colors"
                        >
                            <GrLinkedin />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/share/173dGyPPG6/?mibextid=wwXIfr"
                            className=" transition-colors"
                        >
                            <ImFacebook2 />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
