import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function HomeCourse() {
    const params = useParams()
    // console.log(params);
    const [course, setCourse] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios("https://63547f47e64783fa8285a355.mockapi.io/SubCourse/?Id_Title=" + params.id)
        .then(res => {
            // console.log(res.data);
            setCourse(res.data)
        })
    }, [])

    function handleClick(id, Title){
        navigate(`${Title}/${id}`)
    }
  return (
    <>
    <Navbar/>
        <div id="header-course" className='mb-4 p-6 bg-primary text-white'>
            <div className="header-text">
                <p id="header-text2" style={{ fontSize: '40px', fontWeight: 700 }}>{params.Title}</p>
            </div>

            <img src='https://github.com/FE25-React-project/reactProject-FE25/blob/dev_rajib/fe25-projek-reactjs/src/asset/img/undraw_Educator_re_ju47.png?raw=true' className="img-fluid" alt="" width={450} />

            
        </div>

        <div className="container">
            
            <div className="row mt-4 mb-4 position-relative">
                <div className="col-8 mt-3">
                    <div className="card p-3">
                        <div className="card-body">
                            <h5 className="card-title mb-4" style={{  fontWeight: '700' }}>Tentang Kelas</h5>
                            {course.map(el => (
                                <div key={el.Id_Title}>
                                    <ul >
                                        <li>{el.Title}</li>
                                    </ul>
                                </div>
                            ))}
                
                        </div>
                    </div>
                </div>

                <div className="col-4 mt-3">
                    <div className="card p-3">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 mb-4 position-relative">
                <div className="col-8 mt-3">
                    <div className="card p-3">
                        <div className="card-body">
                            <h5 className="card-title mb-4" style={{  fontWeight: '700' }}>Materi</h5>
                            {course.map(el => (
                                <ul class="list-group list-group-flush" key={el.Id_Title}>
                                    <li class="list-group-item bg-light border rounded mb-1 justify-content-between d-md-flex">{el.Title}<button className='btn btn-outline-primary' onClick={() => (handleClick(el.id, el,))}> Buka </button></li> 
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </>
  )
}

export default HomeCourse