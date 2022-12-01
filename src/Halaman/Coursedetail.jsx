import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Footer from "../components/Footer";

const Coursedetail = () => {
  const [data, setData] = useState([]);
  const params = useParams()

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api-serrum-gudskul.herokuapp.com/api/all-kategori/${params.url}`,
      {
        headers:
        {
           'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      setData(response?.data?.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  },[]);

  console.log(data)

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
        <div className="header-text text-black text-start mt-5">
          <p id="header-text1"></p>
          <p className="fs-3" id=" header-text2">
            Orang yang mudah menyerah tidak akan menghasilkan sesuatu yang
            indah!
          </p>
          <p className="fs-6" id="header-text3">
            Pilih dan cari tahu bakatmu dengan beragam khursus menarik
          </p>
        </div>

        <img
          src="https://github.com/FE25-React-project/reactProject-FE25/blob/dev_rajib/fe25-projek-reactjs/src/asset/img/21559255_6465103.png?raw=true"
          className="img-fluid"
          alt=""
          width={450}
        />
      </div>

      <div className="container align-items-center text-center ">
        <p
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "black",
            marginBottom: "80px",
          }}
        >
          {" "}
          Kelas Tersedia
        </p>

        <div className="row container-fluid row-cols-2 row-cols-lg-5 g-3  align-items-center mb-5 ">
        <Link to={`coursedetail/${data.url}`}>
              <div className="bg-image hover-zoom border shadow-5 m-4 p-4">
                <img src={data.gambar} className="img-fluid" alt="Sample" />
                <div></div>
                <p>{data.nama}</p>
              </div>
            </Link>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Coursedetail;
