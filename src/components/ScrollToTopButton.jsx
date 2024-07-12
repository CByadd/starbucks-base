// src/components/ScrollToTopButton.js
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/ScrollToTopButton.module.css';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const toggleVisibility = () => {
    if (footerRef.current) {
      const footerPosition = footerRef.current.getBoundingClientRect();
      if (footerPosition.top < window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div ref={footerRef}></div>
      {isVisible && (
        <div className={styles.scroll_to_top_section}>
<h1>you have reached the end of the page</h1>
        <div className={styles.scroll_to_top} onClick={scrollToTop}>
        <FaArrowUp />
        </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
