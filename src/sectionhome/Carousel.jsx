import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carouseledit = () => {
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
    <div className="carclas" style={{ position: "relative" }}>
      <Carousel responsive={responsive}>
        <div>
          <img
            src="https://images.pexels.com/photos/11191124/pexels-photo-11191124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top "
            id="carouselfoto"
            alt="Fissure in Sandstone"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/b4/6e/ac/b46eac44a3accf1e682a91a00d311eb5.jpg"
            class="card-img-top "
            id="carouselfoto"
            alt="Fissure in Sandstone"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/14208493/pexels-photo-14208493.jpeg?auto=compress&cs=tinysrgb&w=1600"
            class="card-img-top  "
            id="carouselfoto"
            alt="Fissure in Sandstone"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/96/5d/03/965d03f6a96137654d65250f18f72a4c.jpg"
            class="card-img-top  "
            id="carouselfoto"
            alt="Fissure in Sandstone"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/e7/04/28/e70428ad60f6bbc4513248f0340aa4e7.jpg
 "
            id="carouselfoto"
            class="card-img-top "
            alt="Fissure in Sandstone"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/57/07/1c/57071c43abc767c7106a2a24c6f7853c.jpg
 "          
            
            id="carouselfoto"
            class="card-img-top "
            alt="Fissure in Sandstone"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Carouseledit;
