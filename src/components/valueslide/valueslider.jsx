import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './vslider.css';
import { useNavigate } from 'react-router-dom';

import value1 from '../../assets/value1.jpeg';
import value2 from '../../assets/value2.jpeg';
import value3 from '../../assets/value3.jpeg';
import value4 from '../../assets/value4.jpg';

const values = [
  {
    title: "Care-First",
    id: "care-first",
    description: `Women's health is at the heart of everything we do. Our approach develops science-backed solutions to cater to women's healthcare needs at every stage of life.`,
    image: value1, 
  },
  {
    title: "Innovation",
    id: "innovation",
    description: `Innovation drives us to create cutting-edge solutions for the evolving needs of patients and healthcare professionals. We continuously harness the power of science and technology.`,
    image: value2,  
  },
  {
    title: "Sustainability",
    id: "sustainability",
    description: `We embrace eco-conscious practices from sourcing materials to reducing our environmental footprint, ensuring healthcare solutions benefit people and the planet.`,
    image: value3,  
  },
  {
    title: "Quality Excellence",
    id: "quality-excellence",
    description: `Quality is the foundation of everything we do. We ensure every product is safe, effective, and reliable, adhering to the highest standards in research, formulation, and manufacturing.`,
    image: value4,  
  },
];

const Valueslider = () => {
  const navigate = useNavigate();

  const handleReadMore = (sectionId) => {
    navigate(`/about#${sectionId}`);
    
  };

  return (
    <div className="values-wrapper">
      <div className="container value-head">
        <div className="value-heading">
          <h1 style={{fontSize:'36px', color:'#D476A6', fontWeight:'700', margin:'10px 0'}}>WHY OUS</h1>
          <h2 style={{fontSize:'77px', fontWeight:'400', color:'#CF679C', marginTop:'15px', marginBottom:'45px'}}>Our Values</h2>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="values-swiper"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="value-card">
              <img src={value.image} alt={value.title} className="value-image" />
              <div className="value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <button 
                  className="value-button" 
                  onClick={() => handleReadMore(value.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Valueslider;