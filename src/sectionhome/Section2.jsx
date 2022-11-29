import { MDBCol, MDBRipple, MDBRow } from "mdb-react-ui-kit";

const Section2 = () => {
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
    <div className="container-fluid" responsive={responsive}>
      <MDBRow around className="" id="section2-row">
        <MDBCol size="6">
          <MDBRipple rippleTag="a">
            <img
              src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width={1000}
              className="img-fluid rounded "
              alt="example"
              id="section2-img"
            />
          </MDBRipple>
        </MDBCol>
        <MDBCol size="5">
          <h2>Tentang kami</h2>
          <p className="lh-lg">
            Dorongan untuk dapat menjaga interaksi sosial telah membuat kami
            membentuk komunitas yang lebih dewasa dan mandiri, baik dari segi
            kegiatan (non-profit) hingga kegiatan bagaimana mencari kegiatan
            fundraising (menguntungkan). Bukan perkara mudah pada awalnya ketika
            kami membentuk komunitas yang kami sebut SERRUM dengan huruf R
            (ganda) di tengahnya, komunikasi antar individu menjadi dasar
            bagaimana komunitas ini bisa bertahan. Begitulah cara kami
            mendefinisikan kata Komunitas sebagai 'Komunikasi Berkualitas',
            berinteraksi dan saling memahami
          </p>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Section2;
