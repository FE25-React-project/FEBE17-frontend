import "./card.css";

const AticleCard = (props) => {
  return (
    <div className="col text-center hover-zoom ">
      <img src={props.img} alt="" className=" rounded-7 border  border-1 shadow-5 mb-3" style={
        {width: '80%', height: '400px'}
      } />
      <h4 className="fw-light text-decoration-underline">{props.judul}</h4>
      <h4 className="" >{props.desc}</h4>

    </div>
  );
};
export default AticleCard;
