import React from "react";
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-around items-center py-6 bg-blue-600 backdrop-blur bg-opacity-15 sticky top-0 z-10">
            <Link to="home" smooth={true} offset={-80} className="nav-link"><h1 className="text-2xl">Teerathep-Ng</h1></Link>

            <ul className="flex gap-10">
                <Link to="home" smooth={true} offset={-80} className="nav-link"><li>Home</li></Link>
                {/* <Link to="blogs" smooth={true} className="nav-link"><li>BLOGS</li></Link> */}
                <Link to="experience" smooth={true} offset={-80} className="nav-link"><li>Experience</li></Link>
                <Link to="projects" smooth={true} offset={-80} className="nav-link"><li>Projects</li></Link>
                <Link to="certificate" smooth={true} offset={-80} className="nav-link"><li>Certificates</li></Link>
            </ul>

            <div className="flex gap-6">
                    <a href="https://linkedin.com/in/teerathep-ngampukdeekul" target="_blank" rel="noopener noreferrer"
                        className="hover:text-[#e00c0c] transition-color duration-300">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/Teerathep-Ng" target="_blank" rel="noopener noreferrer"
                        className="hover:text-[#e00c0c] transition-color duration-300">
                        <FaGithub size={30} />
                    </a>
            </div>

        </nav>
    )
}
export default Navbar;