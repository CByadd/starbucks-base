import React, { useState } from 'react';
import styles from './../styles/Navbar.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar_main_container}>
      <img src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720633150/Starbucks/22_xavkyq.png" alt="logo" className={styles.logo} />
      <div className={`${styles.navbar_content_container} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.branding_items}>
          <a href="#">Menus</a>
          <a href="#">Rewards</a>
          <a href="#">Gift Cards</a>
        </div>
        <div className={styles.user_items}>
          <a href="#"><FaLocationDot /> Find a Store</a>
          <button>Sign in</button>
          <button>Join Now</button>
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
