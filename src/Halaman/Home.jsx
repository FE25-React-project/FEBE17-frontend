import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Section2 from "../sectionhome/Section2";
import Section3 from "../sectionhome/Section3";
import Section4 from "../sectionhome/Section4";
import Section1 from "../sectionhome/Section1";
import Section5 from "../sectionhome/section5";
const Home = () => {
    return ( 
        <motion.div 
        initial={{ opacity: 0, x: 30}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -30 }}
        transition={{ duration: 1 }} >
            <Navbar/>
            <Hero/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section1/>
            <Section5/>
            <Footer/>
        </motion.div>
     );
}
 
export default Home;