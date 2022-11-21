import { MDBBtn } from "mdb-react-ui-kit";

const Section4 = () => {
  return (
    <div>
      <div className="d-flex justify-content-evenly align-items mt-5 container-md">
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
