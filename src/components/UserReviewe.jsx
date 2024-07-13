import React from 'react';
import styles from './../styles/UserReview.module.css';


const UserReviewe = ({ username, image }) => {


  console.log(image);
  
  return (
   
    <div className={styles.user_review_item_container}>
      <div className={styles.user_review_image_container}>
        <img src={image} alt="image" />
        <p>@{username}</p>
      </div>
    </div>
   
  );
};

export default UserReviewe;
