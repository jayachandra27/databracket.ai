import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl font-semibold">Databracket.ai</h2>
          <p className="mt-2 text-sm md:text-base">Elevating success through AI innovation.</p>
        </div>
        <div className="md:flex md:space-x-6">
          <Link href="#" className="text-sm md:text-base hover:text-gray-300">
            Terms of Service
          </Link>
          &nbsp;
          <Link href="#" className="text-sm md:text-base hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link
            href="https://www.youtube.com/channel/UC1otT3oYubDHeGsjix9LVCA?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center h-10 md:h-20">
              <FontAwesomeIcon icon={faYoutube} className="text-red-600 h-4 md:h-6 pr-2 md:pr-4" />
            </div>
          </Link>
          <Link
            href="https://databracket.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center h-10 md:h-20">
              <FontAwesomeIcon icon={faEnvelope} className="text-black-50 h-4 md:h-6 pr-2 md:pr-4" />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/databracket/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center h-10 md:h-20">
              <FontAwesomeIcon icon={faInstagram} className="text-orange-500 h-4 md:h-6 pr-2 md:pr-4" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;