import React from 'react';
import Header from '@/pages/header';
import Hero from '@/pages/hero';
import SlidingWindowCarousel from '@/pages/serviceCarousal';
import '../public/carousal.scss'
import Footer from '@/pages/footer';

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
          <Footer />
        </div>
        </div>
      )
}
