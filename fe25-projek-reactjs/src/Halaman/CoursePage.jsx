import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";
const CoursePage = () => {
  const params = useParams();
  // console.log(params);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios(
      "https://63547f47e64783fa8285a355.mockapi.io/SubCourse/?id=" + params.id
    ).then((res) => {
      // console.log(res.data);
      setCourse(res.data);
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
      <div
        className=" align-items-center container-fluid"
        style={{ padding: "3%" }}
      >
        {course.map((el) => (
          <div key={el.id}>
            <h5 className="mt-5 mb-5 text-center">{el.Title}</h5>
            <div className="ratio ratio-21x9 mt-3 mb-4">
              <iframe src={el.video} title="YouTube video"></iframe>
            </div>

            <p>{el.Deskripsi}</p>
            <Footer />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursePage;
