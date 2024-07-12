import { useState } from 'react'
import './styles/App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import FAQComponent from './components/FAQ';
import faqData from './json/faqData.json';
import stylesFAQ from './styles/Faq.module.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import reviews from './json/UserReview.json';
import UserReviewe from './components/UserReviewe';
import styles_user_review from './styles/UserReview.module.css';
import Slidersdata from './json/Slider.json';
import Slider from './components/Slider.jsx';

function App() {
  const [count, setCount] = useState(0)

  // const [sliderData, setSliderData] = useState([]);

  // useEffect(() => {
  //   setSliderData(Slidersdata);
  // }, []);

  return (
    <>
    
    
     <Navbar/>
    
    <Slider data={Slidersdata}/>

    
   <div className={styles_user_review.user_review_main_container}>
   {reviews.map((item, index) => (
          <UserReviewe key={index} username={item.username} comment={item.comment} image={item.image}/>
        ))}
   </div>
   <div className={stylesFAQ.faq_container}>
   {faqData.map((item, index) => (
          <FAQComponent key={index} question={item.question} answer={item.answer} />
        ))}
   </div>

    <ScrollToTopButton/>
    <Footer/>

    
    </>
  )
}

export default App
