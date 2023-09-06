'use client'
import React, { useState, useEffect } from "react";

import Image from 'next/image'
import dbr from '../assets/databricks_logo.png';
import airflow from '../assets/airflow_service_offering.png';
import python from '../assets/python_offering.png';
import azure from '../assets/azure_cloud_offering.png';
import mlflow from '../assets/mlflow_machine_learning_operations_mlops_offering.png';
import snowflake from '../assets/snowflake_cloud_data_warehouse_offering.png';
import aws from '../assets/aws_offering.png';
import docker from '../assets/docker_offering.png';
import dbt from '../assets/dbt_offering.png';
import rust from '../assets/rust_offering.png'

const images = [
  { src: docker, alt: 'Docker Logo', text: '' },
  { src: mlflow, alt: 'MLFlow Logo', text: '' },
  { src: snowflake, alt: 'Snowflake Logo', text: '' },
  { src: python, alt: 'python Logo', text: '' },
  { src: dbr, alt: 'Databricks Logo', text: '' },
  { src: aws, alt: 'AWS Logo', text: '' },
  { src: airflow, alt: 'Airflow Logo', text: '' },
  { src: azure, alt: 'Azure Logo', text: '' },
  { src: dbt, alt: 'getdbt Logo', text: '' },
  // { src: rust, alt: 'Rust Logo', text: 'RUST WASM and Development' },
];

const SlidingWindowCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-4xl mt-4 md:mt-8 underline underline-offset-2">
        <b>Supported Technologies</b>
      </h2>
      <br />
      <h3 className="text-sm md:text-base lg:text-lg">
        We specialize in offering thoughtfully curated courses, tutorials, and services to tailor current market needs,{' '}
        enhancing the confidence levels of individuals/teams for <br />
        successive and progressive development, seamless integration, and efficient deployment of AI services. <br />
      </h3>
      <br />
      <br />
      <div className="slider">
        <div className="slide-track flex items-center overflow-x-scroll md:overflow-x-auto">
          {images.map((image, index) => (
            <div
              className={`slide ${index === activeIndex ? 'active' : ''} ${
                index !== 0 ? 'ml-2 md:ml-4 mb-2 md:mb-4' : ''
              }`}
              key={index}
            >
              <Image src={image.src} alt={image.alt} width={180} height={100} />
              {/* <p>{image.text}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingWindowCarousel;





