import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Fetch = () => {
 const [data, setData] = useState([]);

  useEffect (()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=> setData((response.data)));
    
  },[])
  return (
    <div>
        {data.map((val, ind)=>{
          return <div key={ind}>
            <h3> Category: {val.category} </h3>
            <p>S.No {val.id} </p>
            <img src={val.image} alt=""  height={300}/>
            <p><b>Name</b>: {val.title}</p>
            <p> $ {val.price}</p>
            <p>Rating {val.rating.rate}</p>

          </div>
        })}
    </div>
  )
}

export default Fetch