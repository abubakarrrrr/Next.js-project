"use client"
import axios from "axios";
import { useEffect, useState } from "react";
// import Movie_data from "../component/Movie_data";
import Link from "next/link";



const Movie =  () => {
  const [data,setdata]=useState([]);
   
 
const api_data=async ()=>{
  const response= await axios.get('https://api.pujakaitem.com/api/products?');
  const result= await response.data;
  // const res =await result.products;
  setdata(...data,result)
  
  
}
console.log(data, "data")

useEffect(()=>{
api_data()
},[])
    
  

    return (
      <div>
      <br /><br /><br /><br />
       <h1 className="text-center text-3xl my-5 font-bold text-gray-400">All products Are Available</h1>
<div className="grid md:grid-cols-2 lg:grid-cols-4 m-auto w-4/5">

  {
    data.map((currentItem,index)=>{
      return <div className="mx-3    h-96 my-4  border-x-slate-500 border-y-slate-500 border  " key={index}>
        <img src={currentItem.image} alt={currentItem.name} className=" w-full  h-40"    />
        <h1 className="mt-2 text-center font-bold text-gray-600">{currentItem.id}</h1>
        <h1 className="mt-2 text-center font-bold text-gray-600">{currentItem.name}</h1>
        <p className="mt-2 text-center">{currentItem.description.slice(0,50)}</p>
        <div className="grid place-content-center">
        <Link  href={`/movie/${currentItem.id}`}> 
     <button className="border mt-5 bg-red-700 text-white hover:bg-white hover:text-black text-center rounded-2xl p-3 ">Explore us</button>
        </Link>

        </div>
      </div>
    })
  }
</div>
      </div>
    )
  }
  
  export default Movie
  