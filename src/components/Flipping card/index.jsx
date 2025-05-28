import React from "react";
import "./card.css";
import { FaPills } from "react-icons/fa";
import { MdOutlineMedicationLiquid } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";

const Card = () => {
  return (
    <div>
      <section className="list-product">
        <div className="container list-head">
          <h1 style={{fontSize:'40px', fontWeight:'400px', color:'#D476A6', marginTop:'15px', marginBottom:'18px'}}>Lists Of Products</h1>
        </div>
        <div className="container set-1">
          <div className="main-card">
            <div className="card">
              <div className="front">
                <FaPills className="products-icons" />
                <br />
                <p className="icon-content">Tablets</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#E10484",
                    marginBottom: "0",
                    marginTop: "15px",
                  }}
                >
                  ORI-OVA
                </h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    className="back-content"
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                      paddingRight: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        marginTop: "6px",
                        lineHeight: "15px",
                      }}
                    >
                      <span>Myo-Inositol – 550 mg</span>
                      <br></br>
                      <span>D-Chiro Inositol – 13.8 mg</span>
                      <br></br>
                      <span>N-Acetylcysteine (NAC) – 300 mg</span>
                      <br></br>
                      <span>Berberine – 50 mg</span>
                      <br></br>
                      <span>Fenugreek Extract – 200 mg</span>
                      <br></br>
                      <span>Vitamin D3 – 1000 IU</span>
                      <br></br>
                      <span>Chromium Picolinate – 100 mcg</span>
                      <br></br>
                      <span>Vitex Agnus Extract – 50 mg Tablets</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <MdOutlineMedicationLiquid className="products-icons" />
                <p className="icon-content">Syrup</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#AE498D",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "9px",
                  }}
                >
                  ORI LARG
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    L-Arginine
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Proanthocyanidin Granules
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <FaPills className="products-icons" />
                <p className="icon-content">Tablets</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#D59100",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "8px",
                  }}
                >
                  ORI-GEST SR
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Natural Micronised
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Progesterone 200mg (SR)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <MdOutlineMedicationLiquid className="products-icons" />
                <p className="icon-content">Syrup</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#DC2A1B",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "8px",
                  }}
                >
                  FOLEAR XT
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Ferrous Ascorbate 30mg +
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    Folic Acid 550mcg + Zinc Sulphate 22.5
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "0px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      paddingTop: "0px",
                    }}
                  >
                    Syrup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container set-1">
          <div className="main-card">
            <div className="card">
              <div className="front">
                <FaPills className="products-icons" />
                <p className="icon-content">Tablets</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#003966",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "8px",
                  }}
                >
                  CALEAR D3
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Calcium Asparto Glycinate 500mg
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    + Vitamin D₃ 2000IU Chewable Tab
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <MdOutlineMedicationLiquid className="products-icons" />
                <p className="icon-content">Syrup</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#027F3B",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "9px",
                  }}
                >
                  ORIWIT
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Lycopene & Multi Vitamin
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Syrup (Pineapple Flavour)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <FaPills className="products-icons" />
                <p className="icon-content">Tablets</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#F17E01",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "8px",
                  }}
                >
                  AminAll
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Amino Acids, L-Arginine &
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Multimineral Capsules
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <MdOutlineMedicationLiquid className="products-icons" />
                <p className="icon-content">Syrup</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#E10484",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "8px",
                  }}
                >
                  FOLEAR-9
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    L-methyl Folate 1mg +
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    Mecobalamin 1500mcg +
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "0px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      paddingTop: "0px",
                      marginBottom: "1px",
                    }}
                  >
                    Pyridoxal-5-Phosphate
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "0px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      paddingTop: "0px",
                    }}
                  >
                    0.5mg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container set-2">
          <div className="main-card">
            <div className="card">
              <div className="front">
                <FaPills className="products-icons" />
                <p className="icon-content">Tablets</p>
              </div>
              <div className="back">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "4px",
                  }}
                >
                  <h4
                    style={{
                      color: "#EB500C",
                      marginBottom: "0px",
                      marginTop: "3px",
                    }}
                  >
                    ORI
                  </h4>
                  <span style={{ paddingLeft: "2px" }}>
                    <h4
                      style={{
                        backgroundColor: "#EB500C",
                        color: "white",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        marginBottom: "0px",
                        marginTop: "3px",
                      }}
                    >
                      Q10
                    </h4>
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Astaxanthin 4mg, Coenzyme Q10
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    200mg,
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Lycopene 5mg, L Carnitine
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    L Tartrate 750mg,
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Zinc Sulphate 17mg,
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    Vitamin E 10mg,
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    L Arginine 100mg &
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    Folic Acid 300mcg Tablets
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front protein-line">
                <GiMuscleUp className="products-icons" />
                <p className="icon-content">Protein Powder</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#01A3D4",
                    marginBottom: "0",
                    marginTop: "50px",
                    paddingTop: "9px",
                  }}
                >
                  ORIWIT
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Protein Powder
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    Flavour: American Ice-Cream
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                    }}
                  >
                    / Chocolate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="card">
              <div className="front">
                <MdOutlineMedicationLiquid className="products-icons" />
                <p className="icon-content">Syrup</p>
              </div>
              <div className="back">
                <h4
                  style={{
                    color: "#003966",
                    marginBottom: "0",
                    marginTop: "30px",
                    paddingTop: "8px",
                  }}
                >
                  CALEAR D3
                </h4>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "5px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    Eq to elemental calcium 300 mg +
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    Eq to elemental phosphorus 150
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    gm + Magnesium hydroxide 75 mg
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      fontWeight: "600",
                      marginBottom: "1px",
                    }}
                  >
                    + Zinc gluconate 4 mg + Vitamin D₃
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginTop: "1px",
                      lineHeight: "15px",
                      marginBottom: "1px",
                      fontWeight: "600",
                    }}
                  >
                    400 IU Syrup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
