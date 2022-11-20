import React, { useEffect, useState } from 'react'
import './../asset/css/style-course.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import img from './../asset/img/21559255_6465103.png'

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
    <div>
      <div id="header" className='mb-4 p-5 bg-primary text-white'>
            <div className="header-text">
                <p id="header-text1"><a>Home</a> - <a>Semua Kategori</a></p>
                <p id="header-text2">Orang yang mudah menyerah tidak akan menhsilkan sesuatu yang indah!</p>
                <p id="header-text3" >Pilih dan cari tahu bakatmu dengan beragam khursus menarik</p>
            </div>

            <img src={img} className="img-fluid" alt="" width={450} />
        </div>

        <div className="container">
          <p
            style={{  
              fontSize: '28px',
              fontWeight: '700',
              color: '#9D9D9D' 
            }}
          > Kelas Tersedia</p>

            <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
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
        
    </div>
  )
}

export default All_Course