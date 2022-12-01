import axios from "axios";
import { useEffect, useState } from "react";
import AticleCard from "./Articlecard";
import Articlelist from "./Articlelist";

const Article = () => {
  const [data, setData] = useState([])
  useEffect(()=> {
    axios
      .get("https://api-serrum-gudskul.herokuapp.com/api/daerah")
      .then((res) => {
        setData(res.data.data);
      });
  },[])
    return (
      <div className="cardarticle">
        <div className="container mt-5 mb-5 pb-5">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {data.map((item) => {
              return (<AticleCard  judul={item.thumbnail} desc={item.name} url= {item.url} />);
            })}
          </div>
        </div>
      </div>
    );
  };
  export default Article;