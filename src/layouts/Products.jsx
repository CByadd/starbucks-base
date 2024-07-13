import React from 'react'
import Slider from '../components/Slider'
import BestSellers from './../json/Bestsellers.json';
import Breakfast from './../json/Breakfast.json';
import Lunch from './../json/Lunch.json';
import Bakery from './../json/Bakery.json';
import Category from './../json/Category.json';
import styles from './../styles/Product.module.css'


const Products = () => {
  return (
    <div className={styles.product_main_container}>
        <div className={styles.product_container}>
        <h1>Best Sellers</h1>
        <Slider data={BestSellers}/>
        </div>
        <span className={styles.product_container_line}></span>
        <div className={styles.product_container}>
        <h1>Breakfast</h1>
        <Slider data={Breakfast}/>
        </div>
        <span className={styles.product_container_line}></span>
        <div className={styles.product_container}>
        <h1>Lunch</h1>
        <Slider data={Lunch}/>
        </div>
        <span className={styles.product_container_line}></span>
        <div className={styles.product_container}>
        <h1>Bakery</h1>
        <Slider data={Bakery}/>
        </div>
        <span className={styles.product_container_line}></span>
        <div className={styles.product_container}>
        <h1>Category</h1>
        <Slider data={Category}/>
        </div>
        <span className={styles.product_container_line}></span>
    </div>
  )
}

export default Products