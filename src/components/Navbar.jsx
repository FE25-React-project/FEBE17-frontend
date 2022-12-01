import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const User = JSON.parse(localStorage.getItem("user"));
  const Fullname = User.fullname;
  console.log(Fullname);
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? "navbar navbar-expand-lg fixed-top navbar-dark nav-bg"
          : "navbar navbar-expand-lg fixed-top navbar-dark"
      }
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to={"/home"}>
          UrArtCourse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {localStorage.getItem("token") ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-1"
                  aria-current="page"
                  to={"/home"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-1" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-1 text-white"
                  to={"/course"}
                >
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-1" to={"/blog"}>
                 Daerah
                </Link>
              </li>
              <MDBDropdown>
                <MDBDropdownToggle className="bg-light text-dark">
                  {Fullname}
                </MDBDropdownToggle>
                <MDBDropdownMenu className="bg-dark text-dark" title="">
                  <Link to={"/login"} onClick={Logout}>
                    <MDBDropdownItem link>Logout</MDBDropdownItem>
                  </Link>
                  <Link to={"/myprofile"}>
                    <MDBDropdownItem link className="text-dark bg-dark">
                      Edit profile
                    </MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-1"
                  aria-current="page"
                  to={"/home"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-1" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="btn btn-primary btn-sm mt-1">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )
        }
      </div>
    </nav>
  );
};
export default Navbar;
