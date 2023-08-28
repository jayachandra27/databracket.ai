import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Databraket.ai</h2>
          <p className="mt-2">Elevating success through AI innovation.</p>
        </div>
        <div className="md:flex md:space-x-6">
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
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
      </div>
    </footer>
  );
};

export default Footer;