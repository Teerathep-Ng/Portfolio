import React from "react";
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    return (
        <nav className="p-4">
            <ul className="flex justify-evenly">
                <Link to="aboutme" smooth={true} className="nav-link"><li>ABOUT ME</li></Link>
                <Link to="blogs" smooth={true} className="nav-link"><li>BLOGS</li></Link>
                <Link to="experience" smooth={true} className="nav-link"><li>EXPERIENCE</li></Link>
                <Link to="projects" smooth={true} className="nav-link"><li>PROJECTS</li></Link>
                <Link to="certificate" smooth={true} className="nav-link"><li>CERTIFICATE</li></Link>
            </ul>
        </nav>
    )
}
export default Navbar;