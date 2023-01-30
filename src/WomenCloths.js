import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WomenCloths = () => {

    const [womendata, setWomenenData] = useState([]);

  useEffect (()=>{
    axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((response)=> setWomenenData((response.data)));
  },[])
  return (
    <div>
      {womendata.map((val, ind)=>{
          return <div key={ind}>
            <h3> Category: {val.category} </h3>
            <p>S.No {val.id} </p>
            <img src={val.image} alt=""  height={300}/>
            <p><b>Name</b>: {val.title}</p>
            <p> $ {val.price}</p>
            <p>Rating {val.rating.rate} </p>

          </div>
        })}
    </div>
  )
}

export default WomenCloths
