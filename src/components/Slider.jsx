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
      const slideWidth = slider.querySelector('.slide').offsetWidth;
      slider.scrollLeft = currentIndex * slideWidth;
    }
  }, [currentIndex, data.length]);

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
          <div className={`${styles.slide} slide`} key={item.id}>
           <span className={styles.slide_image_holder}> <img src={item.image} alt="image" /></span>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.slider_button}><IoIosArrowForward /></button>
    </div>
  );
};

export default Slider;
