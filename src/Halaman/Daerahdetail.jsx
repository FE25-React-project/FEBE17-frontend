import Article from "../components/Article";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Sectionblog1 from "../Sectionblog/Sectionblog1";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import axios from "axios";
import AticleCard from "../components/Articlecard";
const Daerahdetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://groupfinalproject-production.up.railway.app/api/all-daerah/`
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  return (
    <motion.div
      animate={{
        x: "0",
        opacity: 1,
      }}
      initial={{ opacity: 0, x: -40 }}
      exit={{ opacity: 1, x: 40 }}
      transition={{
        type: "tween",
        duration: 1,
      }}
    >
      <Navbar />
      <Intro heading={"Daerah"} description={"Kenali daerah mu"} />
      <div className="text-center container-sm mt-5 mb-5">
        {data.map((item) => {
                return <div>{parse(item.descripsi)}</div>;
              })}
          
      </div>
              

      <Footer />
    </motion.div>
  );
};
export default Daerahdetail;
