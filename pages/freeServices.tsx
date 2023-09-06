import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import streamlit from '../assets/streamlit_free_service.jpg'

const FreeServices = () => {
  return (
    <div className="bg-ternary-color py-8 md:py-16 lg:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Free Services Offered by Databracket for Community
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <Link
              href="https://socialmedia-automation.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center h-20">
                <Image src={streamlit} alt="Streamlit Service" height={40} width={40} />
                <h4>Youtube Automation Service on Streamlit</h4>
              </div>
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-2">Coming Soon</h2>
              <p className="text-gray-600">
                Subscribe to my Substack newsletter or Follow on Instagram to get updates
              </p>
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-2">Coming Soon</h2>
              <p className="text-gray-600">
                Subscribe to my Substack newsletter or Follow on Instagram to get updates
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeServices;