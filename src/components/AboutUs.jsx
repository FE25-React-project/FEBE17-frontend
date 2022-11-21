import "./AboutUs.css";
import me from "../assets/srm.jpg";
import { MDBCol, MDBRipple, MDBRow } from "mdb-react-ui-kit";
const AboutUs = () => {
  return (
    <div className="container-fluid">
      <MDBRow around className="" id="section2-row">
        <MDBCol size="5">
          <h2 className="mb-5 fw-bold">Tentang kami</h2>
          <p className="lh-lg">
            <span className="pb-5">
            Serrum merupakan perkumpulan studi seni rupa dan pendidikan di
            Jakarta yang didirikan pada tahun 2006. Kata Serrum berasal dari
            kata share dan room yang berarti “ruang berbagi.” Serrum berfokus
            pada isu pendidikan, sosial-politik dan perkotaan dengan pendekatan
            presentasi yang edukatif dan artistik. Kegiatan Serrum meliputi
            proyek seni, pameran, lokakarya, diskusi dan propaganda
            kreatif. Medium karya yang Serrum gunakan meliputi video, mural,
            grafis, komik dan seni instalasi.              
            </span>


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
        <MDBCol size="6">
          <MDBRipple rippleTag="a">
            <img
              src="https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1000}
              className="img-fluid rounded "
              alt="example"
              id="section2-img"
            />
          </MDBRipple>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
export default AboutUs;
