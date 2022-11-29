import { MDBBtn } from "mdb-react-ui-kit";

const Section4 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="d-flex justify-content-evenly align-items mt-5 container-md" responsive={responsive}>
        <div>
          <h3 className="mb-4 fw-lighter fs-3" >Mari belajar</h3>
          <h2 className="mb-3 fw-bolder">Anda dapat mempelajari semuanya.</h2>
          <p>
          Bangun pemahaman yang kuat dan mendalam tentang budaya dan seni 
          </p>
          <MDBBtn className="mt-5">Mulai dari sini</MDBBtn>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/54216/pexels-photo-54216.jpeg?auto=compress&cs=tinysrgb&w=1600"  style={{
                borderRadius: '20px'
            }} width={500} alt="" />
            
        </div>
      </div>
    </div>
  );
};

export default Section4;
