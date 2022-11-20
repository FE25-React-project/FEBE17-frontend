import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Section2 from "../sectionhome/Section2";
import Section3 from "../sectionhome/Section3";
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
            <Footer/>
        </motion.div>
     );
}
 
export default Home;