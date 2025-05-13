import React from "react";

const Header = () => {
    return (
        <div className="items-center p-2 bg-gray-800 text-white w-full">
            <div className="flex items-center justify-between">
                <h1 className="flex font-instrument ">Le Saint Sauvage</h1>
                <nav className="flex ml-4">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#home" className=" text-xs hover:text-gold hover:scale-110 duration-300 ">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#menu" className="text-xs hover:text-gold hover:scale-110 duration-300">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-xs hover:text-gold hover:scale-110 duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-xs hover:text-gold hover:scale-110 duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
