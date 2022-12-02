import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Footer from "../components/Footer";
import AticleCard from "../components/Articlecard";

const Coursedetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://groupfinalproject-production.up.railway.app/api/all-kategori/${params.url}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 2, y: 0 }}
      exit={{ opacity: 2, y: -30 }}
      transition={{ duration: 1.5 }}
    >
      <Navbar />
      <div className="d-flex align-items-center" id="section">
        <div className="container">
          <div className="row">
            <div className="col text-start">
              <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>
                  <a href="#">Semua kategori</a>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
              <h1 className="text-white mt-4 mb-4 text-opacity-100">
                SEMUA KATEGORI
              </h1>
              <p className="text-white mb-4">
                Pilih dan cari tahu bakatmu dengan beragam kursus yang menarik
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="header-course"
        className="mb-4 p-5 bg-white text-white container-xl"
      >
     

      
      </div>

        <div className="text-center">
          {data.sub_kategori}
          {data.nama}


        </div>
      <Footer />
    </motion.div>


  
  );
};

export default Coursedetail;
