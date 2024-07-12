import { useState } from 'react'
import './styles/App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import FAQComponent from './components/FAQ';
import faqData from './json/faqData.json';
import stylesFAQ from './styles/Faq.module.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import UserReveiw from './components/UserReview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
     <Navbar/>
     <UserReveiw/>
    
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
