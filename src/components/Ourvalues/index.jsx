import React, { useEffect } from "react";
import "./value.css";
import value1 from '../../assets/value1.jpeg';
import value2 from '../../assets/value2.jpeg';
import value3 from '../../assets/value3.jpeg';
import value4 from '../../assets/value4.jpg';
import { useLocation } from 'react-router-dom';

const Value = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section className="value" style={{marginTop:'40px'}}>
      <div className="container value-head">
        <div className="value-heading">
          <h1 style={{fontSize:'36px', color:'#D476A6', fontWeight:'700', margin:'10px 0'}}>WHY OUS</h1>
          <h2 style={{fontSize:'77px', fontWeight:'400', color:'#CF679C', marginTop:'15px', marginBottom:'45px'}}>Our Values</h2>
        </div>
      </div>

      <div id="care-first" className="content-section container">
        <div className="image-wrapper">
          <img src={value1} alt="Healthcare Support" className="content-image" />
        </div>
        <div className="text-content">
          <p className="description">
          <strong>Patient-Centric Approach:</strong> At Orisun Lifesciences,
            women's health is at the heart of everything we do. Our
            patient-centric approach drives us to develop high-quality,
            science-backed solutions that cater to the unique healthcare needs
            of women at every stage of life. We prioritize safety, efficacy, and
            innovation, ensuring that our products are not only effective but
            also trusted by healthcare professionals and loved by patients. By
            actively listening to the needs of women and collaborating with
            medical experts, we continuously refine our offerings to enhance
            maternal health, prenatal care, and overall well-being.
          </p>
        </div>
      </div>

      <div id="quality-excellence" className="content-section container">
        <div className="image-wrapper">
          <img src={value4} alt="Healthcare Support" className="content-image" />
        </div>
        <div className="text-content">
          <p className="description">
          <strong>Quality Excellence:</strong> At Orisun Lifesciences, quality
            excellence is the foundation of everything we do. We are committed
            to upholding the highest standards in research, formulation, and
            manufacturing to ensure that every product we deliver is safe,
            effective, and reliable. Our rigorous quality control measures
            adhere to global healthcare standards, ensuring that our solutions
            meet the needs of both healthcare professionals and patients. From
            sourcing premium ingredients to conducting extensive testing, we
            leave no stone unturned in our pursuit of excellence.
          </p>
        </div>
      </div>

      <div id="innovation" className="content-section container">
        <div className="image-wrapper">
          <img src={value2} alt="Healthcare Support" className="content-image" />
        </div>
        <div className="text-content">
          <p className="description">
          <strong>Innovation:</strong> At Orisun Lifesciences, innovation is
            at the core of our mission to advance women's healthcare. We
            continuously harness the power of science and technology to develop
            cutting-edge solutions that address the evolving needs of patients
            and healthcare professionals. By investing in research, staying
            ahead of medical advancements, and embracing the latest
            breakthroughs, we create products that set new standards in maternal
            and prenatal care. Our commitment to innovation drives us to explore
            novel formulations, improve product efficacy, and enhance patient
            outcomes.
          </p>
        </div>
      </div>

      <div id="sustainability" className="content-section container" >
        <div className="image-wrapper">
          <img src={value3} alt="Healthcare Support" className="content-image" />
        </div>
        <div className="text-content">
          <p className="description">
          <strong>Sustainability:</strong> At Orisun Lifesciences,
            sustainability is an integral part of our commitment to building a
            healthier future. We actively embrace eco-conscious practices in our
            operations, from responsibly sourcing raw materials to minimizing
            our environmental footprint in manufacturing and packaging. By
            integrating sustainable solutions, we strive to reduce waste,
            conserve resources, and promote ethical practices that benefit both
            people and the planet. Our dedication to sustainability reflects our
            belief that healthcare should not only enhance lives today but also
            protect the well-being of future generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Value;