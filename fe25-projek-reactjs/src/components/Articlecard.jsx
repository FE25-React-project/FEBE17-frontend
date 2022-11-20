import "./card.css";

const AticleCard = (props) => {
  return (
    <div className="col">
      <img src={props.img} alt="" className="w-100 mb-3" />
      <h4 className="fw-semibold">{props.judul}</h4>
      <p>{props.desc}</p>
      <a href={props.url} className="btn btn-lg btn-primary">
        Baca Sekarang
      </a>
    </div>
  );
};
export default AticleCard;
