import axios from "axios";
import { useEffect, useState } from "react";
import AticleCard from "./Articlecard";

import parse from "html-react-parser";
import { Link } from "react-router-dom";
const Article = () => {
  const daerah = [
    {
      id: 1,
      name: "jogja",
      thumbnail:
        "https://i.pinimg.com/564x/b4/6e/ac/b46eac44a3accf1e682a91a00d311eb5.jpg ",
      url: "jogja",
    },
    {
      id: 2,
      name: "bali",
      thumbnail:
        "https://images.pexels.com/photos/14208493/pexels-photo-14208493.jpeg?auto=compress&cs=tinysrgb&w=1600",
      url: "bali",
    },
    {
      id: 3,
      name: "Jawa timur",
      thumbnail:
        "https://i.pinimg.com/564x/96/5d/03/965d03f6a96137654d65250f18f72a4c.jpg",
      url: "Jawa-timur",
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://groupfinalproject-production.up.railway.app/api/all-daerah")
      .then((res) => {
        setData(res.data.data);

        console.log(res.data.data);
      });
  }, []);
  return (
    <div className="cardarticle d-flex align-items-center ">
      <div className="container-sm mt-5 mb-5 pb-5   ">
        <div className=" row  row-cols-3  g-5">
          {data.map((item) => {
            return (
              <Link to={`/daerahdetail/${item.url}`}>
                <AticleCard
                  judul={item.id}
                  desc={item.nama}
                  img={item.thumbnail}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Article;
