<<<<<<< HEAD
import  { Routes,Route } from 'react-router-dom'
import All_Course from './Halaman/All_Course';
import CoursePage from './Halaman/CoursePage';
import HomeCourse from './Halaman/HomeCourse';
import Homepage from './Halaman/Homepage';
import Loginpage from './Halaman/Loginpage';
import Registerpage from './Halaman/Registerpage';

const Routerapp = () => {
   return ( 
      <div>
            <Routes>
            <Route path='/' element={<Homepage/>} />
               <Route path='login' element={<Loginpage/>} />
               <Route path='register' element={<Registerpage/>} />
               <Route path='allcourse'>
                  <Route path='' element={<All_Course/>}/>
                  <Route path=':Title/:id' >
                     <Route path='' element={<HomeCourse/>}/>
                     <Route path=':Title/:id' element={<CoursePage/>}/>
                  </Route>
               </Route>
            </Routes>
      </div>
   );
}

export default Routerapp;
=======
import { Routes, Route } from "react-router-dom";
import Homepage from "./Halaman/Homepage";
import Loginpage from "./Halaman/Loginpage";
import Registerpage from "./Halaman/Registerpage";
import { motion } from "framer-motion";
const Routerapp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </div>
  );
};

export default Routerapp;
>>>>>>> 213200bdee51943b9125eb6675c3887264d97d3c
