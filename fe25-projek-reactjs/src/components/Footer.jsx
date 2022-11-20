import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-1 justify-content-between">
          <div className="col col-lg-6 mb-lg-0 mb-4">
            <h2 className="fw-bold text-white mb-3">Serrum</h2>
            <p className="text-white-50">Situs web ini menyajikan pembelajaran yang up to date dan menyajikan informasi terbaru seputar jadwal acara.</p>
          </div>
          <div className="col col-lg-2 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white">Menu</h5>
            <Link to={"/"} className="text-white-50 mt-3">
              Home
            </Link>
            <Link to={"/about"} className="text-white-50 mt-2">
              About
            </Link>
            <Link to={"/portofolio"} className="text-white-50 mt-2">
              Course
            </Link>
            <Link to={"/blog"} className="text-white-50 mt-2">
              Blog
            </Link>
          </div>
          <div className="col col-lg-3 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white mb-3">Tentang Kami</h5>
            <p className="text-white-50 mt-2">No.34, RT.4/RW.4, Jagakarsa, Kec.Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 126220.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-white text-center copytext">&copy; Copyright 2022 by Fe25, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;