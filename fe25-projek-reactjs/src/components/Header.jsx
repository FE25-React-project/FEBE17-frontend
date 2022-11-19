import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBPaginationLink,
  MDBPaginationItem,
} from "mdb-react-ui-kit";
import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <MDBNavbar
      expand="lg"
      className="d-flex justify-content-evenly "
      bgColor="light"
    >
      <div>
        <Link to="/login">
          <MDBPaginationItem>
            <MDBPaginationLink href="#">Login</MDBPaginationLink>
          </MDBPaginationItem>
        </Link> 
      </div>
      <div className="">
        <MDBContainer fluid>
          <nav aria-label="breadcrumb">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <Link to="/">
                  <a href="#">Home</a>
                </Link>
              </MDBBreadcrumbItem>

              <MDBBreadcrumbItem active aria-current="page">
                <Link to="/login">
                  <a href="#">Login</a>
                </Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBContainer>
      </div>

      <div>
        <img
          src="https://i.postimg.cc/CKWgBW3N/Logo-Rilis-Album-Musisi-Cilik-Minimalis-Krem-Kuning-1.png"
          alt=""
          width="90vh"
        />
      </div>
    </MDBNavbar>
  );
};

export default Header;
