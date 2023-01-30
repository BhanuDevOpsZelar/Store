import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Electronics = () => {
  
    const [electronics, setElectronics] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
        .then((res)=> setElectronics(res.data));
    },[])
  return (
    <div>
    {electronics.map((val, ind)=>{
      return <div key={ind}>
        <h3> Category: {val.category} </h3>
        <p>S.No {val.id} </p>
        <img src={val.image} alt=""  height={300}/>
        <p><b>Name</b>: {val.title}</p>
        <p> ${val.price}</p>
        <p>Rating {val.rating.rate} </p>

      </div>
    })}
</div>
  )
}

export default Electronics