import React, { useState, useEffect, useRef } from 'react';
import styles from './../styles/Slider.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = 400; 
      slider.scrollLeft = currentIndex * slideWidth;
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className={styles.slider_container}>
      <button onClick={prevSlide} className={styles.slider_button}><IoIosArrowBack /></button>
      <div className={styles.slider} ref={sliderRef}>
        {data.map((item) => (
          <div className={styles.slide} key={item.id}>
            <h3>{item.name}</h3>
            <img src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720816761/771598d3-8b50-46ab-8b5b-c66ed800e04e_c0oe54.png" alt="image" />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.slider_button}><IoIosArrowForward /></button>
    </div>
  );
};

export default Slider;
