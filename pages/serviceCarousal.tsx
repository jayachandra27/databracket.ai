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

const images = [
  { src: docker, alt: 'Docker Logo', text: 'Docker End-to-End Support' },
  { src: mlflow, alt: 'MLFlow Logo', text: 'End-to-End MLOps ' },
  { src: snowflake, alt: 'Snowflake Logo', text: 'Snowflake Data Engineering and Automation' },
  { src: python, alt: 'python Logo', text: 'Python Development and Automation' },
  { src: dbr, alt: 'Databricks Logo', text: 'Data Engineering & Machine Learning' },
  { src: aws, alt: 'AWS Logo', text: 'AWS Development and Support' },
  { src: airflow, alt: 'Airflow Logo', text: 'Airflow Automation' },
  { src: azure, alt: 'Azure Logo', text: 'Azure Development and Support' },
  { src: dbt, alt: 'getdbt Logo', text: 'ELT with getdbt  ' },
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
      <h2 className="text-4xl mt-4"><b>Services We Offer</b></h2>
      <h3 className="text-xl italic ">We specialize in offering thoughtfully curated courses, tutorials and services to tailor current market needs to enhancing the levels of individual/team confidence levels for <br />
         successive and  progressive development, seamless integration, and efficient deployment of AI services. <br />
      </h3>
      <br />
      <p className="text-xl italic">Our focus areas encompass self-development, career growth, and entrepreneurial achievement</p>
      <br />
      <br />
      <div className="slider">
        <div className="slide-track flex items-center">
          {images.map((image, index) => (
            <div className={`slide ${index === activeIndex ? 'active' : ''}`} key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={180}
                height={100}
                className={index !== 0 ? 'ml-6 mb-6' : ''}
              />
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingWindowCarousel;





