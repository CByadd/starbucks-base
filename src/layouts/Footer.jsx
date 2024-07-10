import React from 'react'
import styles from './../styles/Footer.module.css';
import { FaSpotify } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer_main_container}>
        <div className={styles.footer_content_container}>
            <div className={styles.footer_content_item_container}>
                <h1>About Us</h1>
                <ul>
                    <li>Our Company</li>
                    <li>Our Coffe</li>
                    <li>Stories and News</li>
                    <li>Starbucks Archive</li>
                    <li>Investor Relation</li>
                    <li>Customer Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.footer_content_item_container}>
            <h1>Careers</h1>
                <ul>
                    <li>Culture and Values</li>
                    <li>Inclusion,Diversity and Equity</li>
                    <li>College Achievement Plan</li>
                    <li>Alumni Community</li>
                    <li>U.S Careers</li>
                    <li>International Careers</li>
                </ul>
            </div>
            <div className={styles.footer_content_item_container}>
            <h1>Social Impact</h1>
                <ul>
                    <li>People</li>
                    <li>Planet</li>
                    <>Environtmental and Social Impact Reporting</>
                </ul>
            </div>
            <div className={styles.footer_content_item_container}>
            <h1>For Business Partners</h1>
                <ul>
                    <li>Landlord Support Center</li>
                    <li>Suppliers</li>
                    <li>Corporate Gift Card Sales</li>
                    <li>Office and Foodservice Coffee</li>
                </ul>
            </div>
            <div className={styles.footer_content_item_container}>
            <h1>Order and Pick Up</h1>
                <ul>
                    <li>Order on the App</li>
                    <li>Order on the Web</li>
                    <li>Delivery</li>
                    <li>Order and Pick Up Options</li>
                    <li>Explore and Find Coffee</li>
                </ul>
            </div>

        </div>
        <div className={styles.footer_copyrigth_container}>
            <div className={styles.footer_icon_container}>
            {/* <a><FaSpotify /></a> */}
            <a><FaPinterestP /></a>
            <a><FaXTwitter /></a>
            <a><FaFacebookF /></a>
            <a><FaYoutube /></a>
            <a><FaInstagram /></a>
            </div>
            <h4>© 2024 Starbucks Coffee Company. All rights reserved.</h4>
        </div>
    </div>
  )
}

export default Footer