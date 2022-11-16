import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right className='mb-2 mb-lg-1'>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Headsdsg</h1>
            <h4 className='mb-3'>Subheading</h4>
            <MDBBtn tag="a" outline size="lg">
              Call to action
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
