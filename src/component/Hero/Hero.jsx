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
        })
    }, [])

    const pdfUrl = "https://drive.google.com/file/d/1u4pgzV45UtEj43r7Q8mpzxrj-Y51fbOH/view";
    const pdfDownload = "https://drive.usercontent.google.com/u/0/uc?id=1u4pgzV45UtEj43r7Q8mpzxrj-Y51fbOH&export=download";
    return (
        <div className="hero bg-base-100 min-h-[90vh]">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                {/* <img
                    src={anime}
                    className="max-w-sm rounded-lg shadow-2xl ml-auto"
                /> */}
                <div>
                    <Lottie animationData={lottieanime}></Lottie>
                </div>
                <div className='space-y-3' data-aos="fade-in">
                    <p className='text-2xl'>Hi, my name is</p>
                    <h1 className="text-8xl font-bold">Mehedi <span className='text-white'>Hasan.</span></h1>
                    <h4 className='text-5xl'>Front-End Developer.</h4>
                    <p className="py-6 w-[55%]">
                        I like to know and understand modern technology. Since then I have been working on improving my skills in web Development. When I start any work, I finish it with dedication.
                    </p>
                    <div className='space-x-4'>
                        <button
                            onClick={() => {
                                window.open(pdfUrl, "_blank");
                            }}
                            className="btn btn-soft border-cyan-950"
                        >
                            Check Out My Resume!
                        </button>
                        <button
                            onClick={() => {
                                window.open(pdfDownload, "_blank");
                            }}
                            className="btn btn-soft border-cyan-950"
                        >
                            Download PDF
                        </button>
                    </div>
                    <div className="flex gap-5 pt-5 m-5">
                        <a target="_black" href="https://github.com/Mehedi-maaztech" className="text-[18px] hover:text-white transition-all"><FaGithub /></a>
                        <a target="_black" href="https://www.linkedin.com/in/mehedi-hasan-200213202/" className="text-[18px] hover:text-white transition-all"><GrLinkedin /></a>
                        <a target="_black" href="https://www.facebook.com/share/173dGyPPG6/?mibextid=wwXIfr" className="text-[18px] hover:text-white transition-all"><ImFacebook2 /></a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Hero;