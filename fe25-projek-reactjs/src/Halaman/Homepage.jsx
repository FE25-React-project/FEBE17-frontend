import Section1 from "../sectionhome/Section1";
import Section2 from "../sectionhome/Section2";
import Section3 from "../sectionhome/Section3";
import Section4 from "../sectionhome/Section4";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30}}
      animate={{ opacity: 2, y: 0 }}
      exit={{ opacity: 2, y: -30 }}
      transition={{ duration: 1.5 }}

     
    >
      <Navbar/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer/>
    </motion.div>
  );
};

export default Homepage;
