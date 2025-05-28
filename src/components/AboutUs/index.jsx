import React from 'react'
import './Aboutus.css'
import doctor1 from '../../assets/doctor1.jpg';
import { Link } from 'react-router-dom';

const Aboutus = ({showButton = true}) => {
  return (
      <section className='About-us-section'>
        <div className='About-main container'>
          <div className='about-us-imgbox' data-aos='fade-right' data-aos-offset="65" data-aos-easing="ease-in-sine" >
            <img src={doctor1} alt="" className='about-us-image'/>
          </div>
          <div className='about-us-content-box' data-aos='fade-left' data-aos-offset="65" data-aos-easing="ease-in-sine" >
            <div className='about-us-content-heading'>
            <h4>About Orisun Lifescience</h4>
            <h1>Prioritizing your well-being at every stage.</h1>
            </div>
            <div className='about-us-content'>
            <p>
            Welcome to Orisun Lifesciences Pvt. Ltd. Founded in 2018, Orisun
            Lifesciences Pvt. Ltd. is dedicated to <strong>empowering women's health</strong>, 
            with a special focus on care during pregnancy. With a strong
            foundation built on innovation and trust, we strive to enhance the
            well-being of women worldwide.
          </p>
          <p>
            With a team of experienced medical professionals and researchers, we
            integrate cutting-edge advancements with time-tested healthcare
            principles to create products that truly make a difference. Whether
            it’s prenatal nutrition, maternal wellness, or postpartum care, we
            ensure that women receive the support they deserve.
          </p>
            </div>
            {showButton &&(
            <div className="about-us-buttonbox">
              <Link to="/about" className='about-us-button'  onClick={() => window.scrollTo(0, 0)}>Read More of ORISUN &gt;</Link>
            </div>
            )}
          </div>
        </div>
      </section>
  )

}

export default Aboutus;
