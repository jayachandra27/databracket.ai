import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    return(
        <header className="flex items-center justify-between p-4 shadow-md">
            <div className="flex items-center">
            <a href="/"><img src="icon.png" alt="Logo" className="w-16 h-16 mr-2" /></a>
            </div>
            <div className="flex space-x-4 items-right">
            <a href="https://www.youtube.com/channel/UC1otT3oYubDHeGsjix9LVCA?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center items-center h-20">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 h-6 pr-4" />
                <h4>Youtube</h4>
            </div>
            </a>
            <a href="https://databracket.substack.com/" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center items-center h-20">
                <FontAwesomeIcon icon={faEnvelope} className="text-black-50 h-6 pr-4" />
                <h4>Substack</h4>
            </div>
            </a>
            <a href="https://www.instagram.com/databracket/" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center h-20">
                <FontAwesomeIcon icon={faInstagram} className="text-orange-500 h-6 pr-4" />
                <h4>Instagram</h4>
                </div>
            </a>
            </div>
        </header>
    )
}