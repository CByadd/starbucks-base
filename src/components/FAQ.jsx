import React, { useState } from 'react';
import styles from './../styles/Faq.module.css';
const FAQComponent = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
   
    <div className={styles.faq_item}>
      <div className={styles.faq_question} onClick={toggleExpand}>
        <h3>{question}</h3>
        <span className={styles.icon}>{isExpanded ? '-' : '+'}</span>
      </div>
      <div className={`${styles.faq_answer} ${isExpanded ? styles.expanded : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
   
  );
};

export default FAQComponent;
