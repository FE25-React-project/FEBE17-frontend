import "./Intro.css";

const Intro = (props) => {
  return (
    <div className="intro d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-white fw-bold mb-4">{props.heading}</h1>
            <p className="text-white mb-4 text-opacity-75">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
