import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Daerahdummy = () => {
  const [data, setData] = useState([]);
  // const params = useParams()

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://groupfinalproject-production.up.railway.app/api/all-daerah/`,
      {
        headers:
        {
           Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setData(response?.data?.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  },[]);

  return (
    <div className="">
dsdsds
      {/* <Navbar />
      <div className="">
        <div id="">
          <div className="d-flex align-items-center" id="daerahdummy">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <p className="text-white mb-5 text-opacity-75">
                    TEMUKAN KEINGINANMU
                  </p>
                  <h1 className="text-white fw-bold mb-4">Daerah</h1>
                  <p className="text-white mb-5 text-opacity-75">
                    Jual Karya yang Anda peroleh atau buat di sini, dan temukan
                    koleksi koleksi anda berikutnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="">
          <div className="align-items-center text-center container-xl ">
            <h2 className="mb-4 mt-5 fw-bold text-decoration-underline">
              Bali
            </h2>
          </div>
        </div>
        <div className="container-sm mt-5 text-center" id="">
          <p>
            Kepopuleran Bali sebagai daerah tujuan wisata dengan kekayaan alam
            dan keseniannya tak perlu diragukan lagi. Tapi, ternyata ada
            beberapa kesenian tradisional khas Bali yang masih belum banyak
            orang ketahui secara detil, lho. Penasaran? Berikut informasi
            lengkapnya.
          </p>
          <img
            src="https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-1990177331-99deedc6e39b6b9dd4898edf62c805f0.jpg"
            alt=""
            id="imgdummy"
          />

          <h3 className="fw-bold mt-5 mb-3">
            Pengaruh Terbentuknya Kesenian Khas Bali
          </h3>
          <p>
            {" "}
            Provinsi Bali atau yang dikenal juga dengan sebutan Pulau Dewata
            memiliki keindahan alam dan kekayaan budaya. Kepopuleran Bali bahkan
            kini sudah menyebar hingga ke seluruh dunia. Siapapun yang
            mengunjunginya tidak hanya menikmati pemandangan wisata, tapi juga
            menyimak pertunjukan kesenian tradisional khas Bali. Ada beberapa
            hal yang mempengaruhi terbentuknya kesenian khas Bali. Bali sebagai
            pulau yang letaknya di bagian tengah Indonesia memiliki bahasa
            daerah yang khas, tidak mirip dengan daerah lain. Kehidupan warganya
            sangat memelihara keseimbangan alam. Sedangkan untuk budaya yang
            mencakup kebiasaan dan kesenian, masyarakat Bali menerima banyak
            pengaruh dari sejarahnya. Seperti penguasaan Majapahit pada abad
            ke-8 sampai abad ke-14 Masehi, kemudian masuknya agama Hindu
            setelahnya melalui saudagar-saudagar India. Agama Hindu memiliki
            pengaruh besar dalam terbentuknya kesenian tradisional khas Bali. Di
            mana hampir semua kesenian memiliki nilai kesakralan, kesucian, dan
            unsur religius di dalamnya. Di tengah zaman modern dengan sektor
            pariwisata yang makin meningkat, kesenian tradisional khas Bali
            tidak hanya digelar untuk ritual upacara keagamaan. Tapi juga
            sebagai pertunjukan yang sifatnya menghibur dan mengedukasi
            wisatawan.
          </p>
          <h3 className="fw-bold mb-3" id="imgdummy">
            Daftar Kesenian Tradisional Khas Bali
          </h3>
          <h4 className="mb-4">1. Tari Kecak</h4>
          <img
            src="https://i.pinimg.com/564x/16/7e/f8/167ef86c89191082910d26693cf5ddb9.jpg"
            id="imgdummy"
            alt=""
          />
          <p className="mt-5">
            {" "}
            Tari Kecak memang sudah populer karena menjadi ikon kesenian
            tradisional khas Bali. Tapi, apakah kamu tahu detil dari pertunjukan
            tarian ini? Tari Kecak ditampilkan oleh puluhan penari laki-laki
            yang duduk membentuk lingkaran. Gerakan tangan mengarah ke atas
            sembari menyerukan kata ‘cak’ secara berulang menjadi ciri khas
            tarian ini. Tujuan awal dari dilakukannya Tari Kecak adalah bentuk
            komunikasi dengan Tuhan dan roh-roh leluhur dalam menyampaikan
            harapan-harapan. Tari Kecak juga mengisahkan cerita Ramayana. Di
            mana saat Rama berjuang menyelamatkan Shinta, Rama dibantu oleh
            puluhan kera untuk melawan Rahwana.
          </p>
          <h4 className="mb-4">2. Wayang Kulit Bali</h4>
          <img
            src="https://wallpaperaccess.com/full/1955417.jpg"
            id="imgdummy"
            alt=""
          />
          <p className="mt-5">
            Wayang kulit merupakan kesenian yang ada di banyak daerah di
            Indonesia, tak terkecuali juga menjadi kesenian tradisional khas
            Bali. Pertunjukan Wayang Kulit Bali digelar dengan dua tema cerita,
            yakni tema hiburan dengan banyolan komedi lucu, dan tema spiritual
            yang sangat sakral bagi umat Hindu. Karena penyampaian cerita yang
            ringan dan dekat dengan masyarakat, penggemar pertunjukan ini masih
            menarik perhatian hingga kini. Masyarakat kelas bawah, menengah,
            maupun kelas atas menyukainya. Wayang Kulit Bali dimainkan oleh
            dalang profesional yang bercerita sambil menyenandungkan tembang
            khas Bali. Iringan musik dari alat-alat musik tradisional Bali
            membuat pertunjukan makin menarik.
          </p>
        </div>
      </div>

      <Footer /> */}
    </div>
  );
};

export default Daerahdummy;
