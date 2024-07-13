import React from 'react';
import styles from './../styles/UserReview.module.css';


const UserReviewe = ({ username, comment,image }) => {


  console.log(image);
  
  return (
   
    <div className={styles.user_review_item_container}>
      <div className={styles.user_review_image_container}>
        <img src={image} alt="image" />
      </div>
      <div className={styles.user_review_text_container}>
        
      <div className={styles.user_review_text_review_box}>
        <h3>{comment}</h3>
        <img className={styles.user_review_text_review_box_image} src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720807697/Starbucks/Asset_2_ylz052.svg" alt="" />
      </div>
      <div className={styles.user_review_text_name_container}>
      <div className={styles.user_review_text_name_box}>
        <span className={styles.user_review_line}></span>
        <p>{username}</p>
        <img className={styles.user_review_line_dots}  src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720807697/Starbucks/Asset_1_dixjcu.svg" alt="" />
        <img className={styles.user_review_line_circle} src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720807696/Starbucks/Asset_3_tvraf2.svg" alt="" />
      </div>
      </div>
      </div>
      
    </div>
   
  );
};

export default UserReviewe;
