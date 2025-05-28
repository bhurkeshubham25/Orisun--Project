import Aboutus from "../components/AboutUs";
import Value from "../components/Ourvalues";
import Milestone from "../components/milestone";

const About = () => {
  return (
    <div>
      <Aboutus showButton ={false}></Aboutus>
      <Milestone></Milestone>
      <Value></Value>
    </div>
  );
};

export default About;