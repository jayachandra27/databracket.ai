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
  { src: docker, alt: 'Docker Logo', text: 'End-to-End Support' },
  { src: mlflow, alt: 'MLFlow Logo', text: 'End-to-End MLOps' },
  { src: snowflake, alt: 'Snowflake Logo', text: 'Data Engineering and Automation' },
  { src: python, alt: 'python Logo', text: 'Development and Automation' },
  { src: dbr, alt: 'Databricks Logo', text: 'Data Engineering & Machine Learning' },
  { src: aws, alt: 'AWS Logo', text: 'Development and Support' },
  { src: airflow, alt: 'Airflow Logo', text: 'Automation' },
  { src: azure, alt: 'Azure Logo', text: 'Development and Support' },
  { src: dbt, alt: 'getdbt Logo', text: 'ETL&ELT' },
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
      <h2 className="text-2xl md:text-4xl mt-4 md:mt-8 underline underline-offset-2">
        <b>Supported Technologies</b>
      </h2>
      <br />
      <h3 className="text-base md:text-xl lg:text-2xl">
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
                index !== 0 ? 'ml-4 md:ml-6 mb-4 md:mb-6' : ''
              }`}
              key={index}
            >
              <Image src={image.src} alt={image.alt} width={180} height={100} />
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingWindowCarousel;





