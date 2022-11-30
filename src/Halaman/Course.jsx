import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Course1 = () => {
    
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-serrum-gudskul.herokuapp.com/api/all-kategori")
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <Link to={`coursedetail/${item.url}`} >
                <MDBBtn href="#">Button</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        );
      })}
    </div>
  );
};

export default Course1;
