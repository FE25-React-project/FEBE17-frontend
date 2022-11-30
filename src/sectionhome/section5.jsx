import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <div className="d-flex align-items-center" id="section">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="text-white mb-5 text-opacity-75">
              TEMUKAN KEINGINANMU
            </p>
            <h1 className="text-white fw-bold mb-4">Play, explore and trade</h1>
            <p className="text-white mb-5 text-opacity-75">
              Jual Karya yang Anda peroleh atau buat di sini, dan temukan
              koleksi koleksi anda berikutnya.
            </p>
            <Link to={""} className="btn btn-primary btn-lg rounded-1 mt-3">
              Coming soon
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section5;
