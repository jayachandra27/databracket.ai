import React from 'react';
import RedirectButton from './formRedirect';

export default function Hero() {
    return (
        <div className='bg-ternary-color'>
        <br />
        <div>
            <h1 className="text-6xl font-bold text-gray-800 ">Databracket.ai</h1>
            <p className='font-bold text-2xl text-popular-light mb-4'>Uniting Data and AI Solutions.</p>
        </div>
        <br />
        <div className='flex justify-center items-center'>
        <h3 className="text-center">
            Databracket is committed at furnishing individuals with the knowledge, resources, and strategies needed to  <br />
            excel at leveraging the potential of <b>Data Engineering, DevOps and MLOps</b><br />
            to transform innovative <b>AI</b> concepts/ideas into commercial products/services.
        </h3>
        </div>
        
        <RedirectButton/>
        </div>
        )
  }