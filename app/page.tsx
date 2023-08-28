import React from 'react';
import Header from '@/pages/header';
import Hero from '@/pages/hero';
import SlidingWindowCarousel from '@/pages/serviceCarousal';
import Footer from '@/pages/footer';
import FreeServices from '@/pages/freeServices';

import '../public/carousal.scss'

const items = [
  { imageUrl: '/assets/databricks_logo.png' },
  { imageUrl: '/images/slide2.jpg' },
  { imageUrl: '/images/slide3.jpg' },
];

export default function Home() {
  return (
        <div className="bg-popular-primary ">
        <div className="mx-auto text-center">
          <Header/>
          <Hero />
          <SlidingWindowCarousel/>
          <FreeServices />
          <Footer />
        </div>
        </div>
      )
}
