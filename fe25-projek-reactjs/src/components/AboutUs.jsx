import "./AboutUs.css";
import me from "../assets/srm.jpg";

const AboutUs = () => {
  return (
    <div className="aboutme min-vh-100 align-items-center py-lg-0 py-5">
      <div className="container">
        <div className="row align-items-center g-5 g-lg-0">
          <div className="col col-lg-7 order-lg-1 order-2">
            <p className="fw-semibold fs-2">Tentang Kami</p>
            <p className="fw-semibold fs-4">SERRUM</p>
            <p className="my-4">
            Dorongan untuk dapat menjaga interaksi sosial telah membuat kami membentuk komunitas yang lebih dewasa dan mandiri, baik dari segi kegiatan (non-profit) hingga kegiatan bagaimana mencari kegiatan fundraising (menguntungkan). Bukan perkara mudah pada awalnya ketika kami membentuk komunitas yang kami sebut SERRUM dengan huruf R (ganda) di tengahnya, komunikasi antar individu menjadi dasar bagaimana komunitas ini bisa bertahan. Begitulah cara kami mendefinisikan kata Komunitas sebagai 'Komunikasi Berkualitas', berinteraksi dan saling memahami.
            </p>
          </div>
          <div className="col col-lg-5 order-lg-2 order-1">
            <img src={me} alt="" className="poto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
