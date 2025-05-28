import React from "react";
import { motion } from "framer-motion";
import { LuFlagTriangleLeft, LuFlagTriangleRight } from "react-icons/lu";
import "./milestone.css";

const TimelineItem = ({ side, year, children }) => {
  return (
    <div className={`timeline-container ${side}-container`}>
      <div className="flag-icon">
        {side === "left" ? <LuFlagTriangleLeft /> : <LuFlagTriangleRight />}
      </div>
      <motion.div
        className="text-box"
        initial={{ x: side === "left" ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.2, once: false }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <p>
          <strong>{year}:</strong> {children}
        </p>
        <span className={`arrow-${side}`}></span>
      </motion.div>
    </div>
  );
};

const Milestone = () => {
  return (
    <section className="Milestone-section">
      <div className="milestone-header">
        <h3>ESTABLISHED</h3>
        <h2>Milestones</h2>
      </div>
      <div className="timeline">
        <div className="timeline-line" />
        <TimelineItem side="left" year="2018">
          Orisun Lifesciences began with a clear purpose: to reshape women’s
          healthcare with science-backed, high-quality nutrition. From day one,
          our focus has been on supporting women through all stages of life,
          especially during pregnancy and motherhood.
        </TimelineItem>
        <TimelineItem side="right" year="2020">
          We launched our first products, Calear and Folear, designed to support
          maternal health and fetal development. They quickly gained traction in
          the prenatal space, becoming trusted choices for both moms and
          healthcare providers.
        </TimelineItem>
        <TimelineItem side="left" year="2023">
          As our impact grew, so did our network, reaching over 300 prescribers
          across the country. This milestone marked a deeper connection with the
          medical community and reinforced our commitment to putting women’s
          health first.
        </TimelineItem>
        <TimelineItem side="right" year="2024">
          We expanded our product line with Oriova and Ori-Q10, targeting key
          needs like nourishment and antioxidant support. These innovations
          reflect our ongoing dedication to creating smarter, more effective
          solutions for women’s wellness.
        </TimelineItem>
      </div>
    </section>
  );
};

export default Milestone;
