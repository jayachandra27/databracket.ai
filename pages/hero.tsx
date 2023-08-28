import Image from 'next/image'
import React from 'react';
import imgFile from '../assets/databracket_service_offerings_illustrations.png'
import ContactUs from './contactUs';

export default function Hero() {
    return (
        <div className='bg-ternary-color'>
        <br />
        <div>
            <h1 className="text-6xl font-bold text-gray-800 ">Databracket.ai</h1>
            <p className='font-bold text-2xl text-popular-light mb-4'>Uniting Data and AI Solutions.</p>
        </div>
        <div className="flex items-center justify-center">
            <Image src={imgFile} alt="This is the main image" width={500} height={50}></Image>
        </div>
        <div className='flex justify-center items-center pb-3'>
        <h3 className="text-center text-lg">
            Databracket is committed at furnishing teams/individuals with the knowledge, resources, and strategies needed to  <br />
            excel at leveraging the potential of <b>Data Engineering, DevOps and MLOps</b><br />
            to transform innovative <b>AI</b> concepts/ideas into commercial products/services.
        </h3>
        </div>
        <ContactUs/>
        </div>
        )
  }