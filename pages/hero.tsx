import Image from 'next/image'
import React from 'react';
import imgFile from '../assets/databracket_service_offerings_illustrations.png'
import ContactUs from './contactUs';

export default function Hero() {
    return (
        <div className="bg-ternary-color shadow-lg shadow-zinc-300">
            <div className="p-4 lg:p-8 xl:p-16">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Databracket.ai</h1>
                <p className="font-bold text-xl md:text-2xl text-popular-light mb-4">
                Uniting Data and AI Solutions.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <Image src={imgFile} alt="This is the main image" width={500} height={50} />
            </div>
            <div className="p-4 md:p-8 xl:p-16">
                <h3 className="text-center text-lg md:text-xl">
                Databracket is committed at furnishing teams/individuals with the knowledge,
                resources, and strategies to
                excel at leveraging the potential of <b>Data Engineering, DevOps and MLOps</b>
                and transform innovative <b>AI</b> concepts/ideas into commercial products/services.
                </h3>
            </div>
            <ContactUs />
        </div>
        )
  }