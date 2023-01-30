import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MensCloth = () => {
    const [mendata, setMenData] = useState([]);

  useEffect (()=>{
    axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((response)=> setMenData((response.data)));
  },[])
  return (
    <div>
      {mendata.map((val, ind)=>{
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

export default MensCloth
