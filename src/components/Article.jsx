import AticleCard from "./Articlecard";
import Articlelist from "./Articlelist";

const Article = () => {
    return (
      <div className="cardarticle">
        <div className="container mt-5 mb-5 pb-5">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {Articlelist.map((item, index) => {
              return <AticleCard key={index} judul={item.judul} desc={item.desc} img={item.img} url={item.url} />;
            })}
          </div>
        </div>
      </div>
    );
  };
  export default Article;