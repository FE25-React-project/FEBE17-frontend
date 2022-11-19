import { MDBBtn } from "mdb-react-ui-kit";
const Section1 = () => {
  return (
    <div
        className='container-fluid text-center bg-image'
        style={{ backgroundImage: "url('https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: '1000px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-5'>Explore dan tingkatkan bakat senimu tanpa batas</h1>
              <h4 className='mb-6'>Temukan dan kembangkan potensi yang ada dalam dirimu dengan  beragam kursus yang telah menantimu</h4>
              <MDBBtn tag="a" >
                Mulai belajar
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Section1;
