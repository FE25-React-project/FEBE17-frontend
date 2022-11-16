import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <MDBContainer className="d-flex justify-content-center">
        <section className="mb-4">
          <nav aria-label="...">
            <MDBPagination className="mb-0">
              <Link to="/">
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">Home</MDBPaginationLink>
                </MDBPaginationItem>
              </Link>
              <Link to="/register">
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">Register</MDBPaginationLink>
                </MDBPaginationItem>
              </Link>
              <Link to="/login">
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">Login</MDBPaginationLink>
                </MDBPaginationItem>
              </Link>
            </MDBPagination>
          </nav>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3 text-dark "
        style={{ backgroundColor: "light" }}
      ></div>
    </MDBFooter>
  );
};

export default Footer;
