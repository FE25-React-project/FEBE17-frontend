import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-white fw-bold mb-4">Explore dan tingkatkan bakat senimu tanpa batas</h1>
            <p className="text-white mb-5 text-opacity-75">Sedikit kemajuan setiap hari di dalam dirimu menambah sesuatu hingga hasil yang besar</p>
            <Link to={"/about"} className="btn btn-primary btn-lg rounded-1 mt-3">Tentang Kami</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;