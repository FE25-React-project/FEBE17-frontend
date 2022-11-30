import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coursedetail = () => {
  const [data, setData] = useState([]);
  const params = useParams()
  useEffect(() => {
    axios.get(`https://api-serrum-gudskul.herokuapp.com/api/all-kategori/${params.url}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')
            }`
        }
    } ).then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    });
  },[]);
  
  return (
  <div>

  </div>
  );
};

export default Coursedetail;
