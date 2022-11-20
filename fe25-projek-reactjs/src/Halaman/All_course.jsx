import React, { useEffect, useState } from 'react'

import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';
function All_Course() {  
  const [allCourse, setAllCourse] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios("https://63547f47e64783fa8285a355.mockapi.io//Course")
    .then(res => {
      // console.log(res.data);
      setAllCourse(res.data)
    })
  }, []);




  function handleClick(id, Title) {
    navigate(`${Title}/${id}`)
  }

  return (
    <motion.div       initial={{ opacity: 0, y: 30}}
    animate={{ opacity: 2, y: 0 }}
    exit={{ opacity: 2, y: -30 }}
    transition={{ duration: 1.5 }}>
        <Navbar/>
      <div id="header-course" className='mb-4 p-5 bg-white text-white container-xl'>
            <div className="header-text text-black text-start mt-5">
                <p id="header-text1"></p>
                <p className='fs-3' id="header-text2">Orang yang mudah menyerah tidak akan menghasilkan sesuatu yang indah!</p>
                <p className='fs-6' id="header-text3" >Pilih dan cari tahu bakatmu dengan beragam khursus menarik</p>
            </div>

            <img src='https://github.com/FE25-React-project/reactProject-FE25/blob/dev_rajib/fe25-projek-reactjs/src/asset/img/21559255_6465103.png?raw=true' className="img-fluid" alt="" width={450} />
        </div>

        <div className="container align-items-center text-center ">
          <p
            style={{  
              fontSize: '28px',
              fontWeight: '700',
              color: 'black' 
            }}
          > Kelas Tersedia</p>

            <div className="row row-cols-1 row-cols-md-3 g-5 mb-4 align-items-center ">
              {allCourse.map(el => (
                <div className="col" key={el.id}>
                  <div className="card h-100">
                    <img src={el.Img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{el.Title}</h5>
                      <p>{el.DescTitle}</p>
                      <button type="button" className="btn btn-primary" onClick={() => handleClick(el.id, el.Title)}>Selengkapnya...</button>
                    </div>
                  </div>    
              </div>
              ))}
            </div>

        </div>
        <Footer/>
    </motion.div>
  )
}

export default All_Course