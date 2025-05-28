
import Aboutus from '../components/AboutUs'
import Mission from '../components/Mission'
import Product from '../components/Products'
import Card from '../components/Flipping card'
import Milestone from '../components/milestone'
import Hero from '../components/Hero/hero'
import React, { useRef } from 'react';
import ValueSlider from '../components/valueslide/valueslider';
import Contact from '../components/contactus/Contact'

const Home = () => {
  const cardsRef = useRef(null);  
  const scrollToCards = () => {
    if (cardsRef.current) {
      const topPos = cardsRef.current.offsetTop;
      window.scrollTo({
        top: topPos - 0, 
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <Hero scrollToCards={scrollToCards}></Hero>
      <Aboutus showButton ={true}></Aboutus>
      <Mission></Mission>
      <Product></Product>
      <div ref={cardsRef}>  
        <Card />
      </div>
      <ValueSlider></ValueSlider>
      <Milestone></Milestone>
      <Contact></Contact>
    </div>
  )
}

export default Home;
