'use client'
import React from 'react';
import { useState, useEffect } from 'react'; // Import the useEffect and useState hooks
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaBars } from "react-icons/fa";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8 flex justify-between items-center`}>
            <div className="flex items-center space-x-4">
                <a href="/">
                <img src="icon.png" alt="Logo" className="w-16 h-16 mr-2" />
                </a>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-amber-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="black"
                >
                    {isMenuOpen ? (
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.293 5.293a1 1 0 011.414 1.414L7.414 14.414a1 1 0 01-1.414 0L2.293 11.293a1 1 0 111.414-1.414L6 12.586l5.293-5.293a1 1 0 011.414 0z"
                        fill="black"
                    />
                    ) : (
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 4a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1z"
                        fill="black"
                    />
                    )}
                </svg>
                </button>
            </div>

            <div className={`md:flex md:space-x-4 ${isSmallScreen ? 'hidden' : 'mt-4'}`}>
                <button className="bg-yellow-400 hover:bg-white text-black hover:text-white px-4 py-2 rounded-full">
                    <a href="/data_engineering">Data Engineering</a>
                </button>
                <button className="bg-yellow-400 hover:bg-white text-black hover:text-white px-4 py-2 rounded-full">
                    <a href="/devops">DevOps</a>
                </button>
                <button className="bg-yellow-400 hover:bg-white text-black hover:text-white px-4 py-2 rounded-full">
                    <a href="/mlops">MLOps</a>
                </button>
            </div>
            <div className={`md:flex md:space-x-4 ${isSmallScreen ? 'hidden' : 'mt-4'}`}>
                <a href="https://www.youtube.com/channel/UC1otT3oYubDHeGsjix9LVCA?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 h-6 md:h-8 lg:h-10" />
                </a>
                <a href="https://databracket.substack.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-black-50 h-6 md:h-8 lg:h-10" />
                </a>
                <a href="https://www.instagram.com/databracket/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-orange-500 h-6 md:h-8 lg:h-10" />
                </a>
            </div>

            {isSmallScreen || isMenuOpen ? (
                <div className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4`}>
                <button className="bg-yellow-400 hover:bg-white text-black hover:text-white px-4 py-2 rounded-full">
                    <a href="/data_engineering">Data Engineering</a>
                </button>
                <button className="bg-yellow-400 hover:bg-white text-black hover:text-white px-4 py-2 rounded-full">
                    <a href="/devops">DevOps</a>
                </button>
                <button className="bg-yellow-400 hover:bg-white text-black hover:text-white px-4 py-2 rounded-full">
                    <a href="/mlmlops">ML/MLOps</a>
                </button>
                </div>
            ) : null}
        </header>
  );
}