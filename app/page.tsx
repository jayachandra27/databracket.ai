import React from 'react';
import Header from '@/pages/header';
import Hero from '@/pages/hero';

export default function Home() {
  return (
        <div className="bg-popular-primary ">
        <div className="mx-auto text-center">
          <Header/>
          <Hero />
        </div>
        </div>
      )
}
