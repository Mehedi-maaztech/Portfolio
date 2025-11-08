import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png'
import './Navbar.css';
const Navbar = () => {

    const links = (
        <>
            <li>
                <Link to="home" smooth={true} duration={500} spy={true} offset={-70} activeClass="active-link" className="cursor-pointer" >
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500} spy={true} offset={-70} activeClass="active-link" className="cursor-pointer" >
                    About
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500} spy={true} offset={-70} activeClass="active-link" className="cursor-pointer" >
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} activeClass="active-link" className="cursor-pointer" >
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full bg-base-100 shadow-sm z-50">
            <div className="navbar w-10/12 mx-auto" data-aos="fade-down" data-aos-duration="500">
                {/* Left side */}
                <div className="navbar-start">
                    {/* Mobile dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="Logo" className="w-16" />
                    </a>
                </div>

                {/* Center (desktop links) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
                </div>

                {/* Right side */}
                <div className="navbar-end">
                    <a
                        className="btn btn-soft gap-2"
                        href="https://github.com/Mehedi-maaztech"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
