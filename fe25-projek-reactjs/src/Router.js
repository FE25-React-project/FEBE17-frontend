import { Routes, Route } from "react-router-dom";
import Homepage from "./Halaman/Homepage";
import Loginpage from "./Halaman/Loginpage";
import Registerpage from "./Halaman/Registerpage";

import Home from "./Halaman/Home";

import Blog from "./Halaman/Blog";
import About from "./Halaman/About";

const Routerapp = () => {
  return (
    <div>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />       
        <Route path="/register" element={<Registerpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default Routerapp;
