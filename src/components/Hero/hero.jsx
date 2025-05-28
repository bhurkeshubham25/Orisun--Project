import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./hero.css";

// TEST: Temporarily replace these with direct image URLs to rule out path issues
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Hero = ({ scrollToCards }) => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        {/* Left Content (working fine) */}
        <div className="hero-left">
          <h2>Complete Nutrition Guide <br /> During Pregnancy</h2>
          <h3>Building a healthier future together.</h3>
          <button className="hero-button" onClick={scrollToCards}>
            See Our Products &gt;
          </button>
        </div>

        {/* Right Slider - UPDATED */}
        <div className="hero-right">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ 
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="Nutrition 1" className="slider-image" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Nutrition 2" className="slider-image" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Nutrition 3" className="slider-image" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;