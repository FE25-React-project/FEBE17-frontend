const Section3 = () => {
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
    <div className="container-sm" responsive={responsive}>
      <div className="align-items-center text-center">
        <h3>Keuntungan</h3>
        <h2 className="fw-bold mb-5">Bagaimana Serrum membantu anda</h2>
        <div className="d-flex">
          <div>
            
            <img src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1600" className="mb-4 rounded-5" width={360} height={300} alt="" />
            <h3 className="mb-4">Koneksi</h3>
            <p className="lh-lg">
            Jalin dan perluas koneksimu dengan para ahli dibidang seni
            </p>
          </div>
          <div>
           
            <img src="https://images.pexels.com/photos/1038041/pexels-photo-1038041.jpeg?auto=compress&cs=tinysrgb&w=1600" className="mb-4 rounded-5" width={360} height={300} alt="" />
             <h3 className="mb-4">Ruang Berekspresi</h3>
            <p className="lh-lg">Tuangkan pendapat dan ide-ide kreatif yang ada dalam dirimu ke dalam medium seni</p>
          </div>
          <div>
            
            <img src="https://images.pexels.com/photos/4706138/pexels-photo-4706138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-4 rounded-5" width={360} height={300} alt="" />
            <h3 className="mb-4" >Pengalaman</h3>
            <p className="lh-lg">Dapatkan pengetahuan dan pengalaman baru dengan para ahli dibidang seni</p>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Section3;
