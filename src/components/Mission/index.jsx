import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <div>
      <section style={{
        marginTop:'60px', marginBottom:'80px'
      }}>
        <div className="container">
          <div className="mission-head" data-aos='zoom-in' data-aos-offset="210" data-aos-easing="ease-out-sine">
            <h1 style={{marginBottom: '25px'}}>
              “Our mission is to empower women's health with trusted,
              high-quality care that support women’s well-being especially
              during <br></br> pregnancy.”
            </h1>
          </div>
          </div>
          <div className="line-divide" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-offset="250"></div>
          <div className="container">
            <div className="mission-head" data-aos='zoom-in' data-aos-offset="340" data-aos-easing="ease-out-sine">
              <h1 style={{marginTop: '20px'}}>Our Commitment <br></br>
              “We believe in empowering women with the resources they need to
                <div>lead healthy and fulfilling lives.</div> <div>By ensuring access to
                high-quality, specialized care, Orisun</div>  <div>Lifesciences strives to
                make a meaningful</div><div>difference in women’s healthcare globally.”</div> 
              </h1>
            </div>
          </div>
      </section>
      </div>
  );
};

export default Mission;
