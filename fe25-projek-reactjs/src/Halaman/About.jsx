import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const About = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, x: 30}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -30 }}
        transition={{ duration: 1 }} >
      <Navbar/>
      <Intro heading={"About Us"} description={"Yes, this is about Us"} />
      <AboutUs />
      <Footer/>
      </motion.div>
    );
  };
  export default About;