import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../assets/img/u.png";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className="fixed top-0 w-full bg-white z-40 shadow-lg">
            <div className="flex justify-between  items-center px-5 lg:px-40 py-3">
                <div className="flex items-center gap-40 cursor-pointer">
                    <img src={logo} alt="Logo" className="h-20 w-55" />
                    
                    <nav className="hidden md:flex flex-row items-right text-lg font-medium gap-10">
                    
                        <Link
                            to="Home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                        >
                            Home
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="About"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                        >
                            About Us
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="product"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                        >
                            Our Products
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="Contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                        >
                            Contact Us
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="Testimonial"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                        >
                            Testimonials
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                    </nav>
                </div>
                <div className="hidden lg:flex">
                    <Link to="Contact">
                    <Button title="Contact us" />
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${menu ? "block" : "hidden"} absolute bg-black text-white left-0 top-full w-full text-center pt-4 pb-4 gap-4 transition-transform duration-300 transform ${menu ? "translate-y-0" : "-translate-y-full"}`}>
                <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
                <p></p>
                <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    About Us
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
                <p></p>
                <Link
                    to="product"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Our Products
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
                <p></p>
                <Link
                    to="Contact "
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Contact Us
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
                <p></p>
                <Link
                    to="Testimonial"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group relative inline-block hover:text-green-600 transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Testimonials
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
                <p></p>
                <Link to="Contact">
                <Button title="Contact us" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;