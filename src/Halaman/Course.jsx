import axios from "axios";
import { motion } from "framer-motion";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Course1 = () => {
  const [data, setData] = useState([]);
  // const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("https://groupfinalproject-production.up.railway.app/api/all-kategori",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  
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
              <MDBBreadcrumb className="mt-0">
                <MDBBreadcrumbItem>
                  <Link to={'/home'}>
                  <a href="#">Home</a>
                  </Link>
                  
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>
                <Link to={'/course'}>
                  <a href="#">Semua kategori</a>
                  </Link>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
              <h1 className="text-white mt-4 mb-4 text-opacity-100">
                SEMUA KATEGORI
              </h1>
              <p className="text-white mt-4  mb-4">
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

        <div className="row container-fluid row-cols-lg-3 row-cols-md-2 row-cols-1 g-4  align-items-center mb-5 ">
          {data.map((item) => (
            <Link to={`coursedetail/${item.url}`}>
              <div className="bg-image hover-zoom border shadow-5 m-4 p-4">
                <img src={item.gambar} className="img-fluid" alt="Sample" />
                <div></div>
                <p>{item.nama}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Course1;
