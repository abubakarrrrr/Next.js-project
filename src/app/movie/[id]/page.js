// import React from 'react'
'use client'

import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const page = () => {
    
    const [data, setdata]=useState([])

    const id= useParams().id;
    console.log(id,"idd") 
    const singleProduct= async ()=>{
        const res =await axios.get(`https://api.pujakaitem.com/api/products?id=${id}`);
        const result =await res.data;
        setdata([...data,result])
    }

    useEffect(()=>{
singleProduct();
    },[id])
    
    console.log(data, "data")

  return (
    <div className="m-auto w-4/5">
      <h1 className="text-center text-3xl my-5 font-bold text-gray-400">Single Product Data </h1>
       <div>
        {
            data.map((currentItem)=>{
                return (
                    <>
                    <div className="flex justify-between font-bold mt-2 lg:w-1/2 text-gray-400  m-auto">
                <div><h1>Company: {currentItem.company}</h1></div>
                <div><h1>Category: {currentItem.category}</h1></div>
                
              </div>      
              <img src={currentItem.image[0].url} alt={currentItem.name} className="  lg:w-1/2  m-auto" />
             
              <p className="  m-auto mt-5">{currentItem.description}</p>
                    </>

                )
            })
        }
       </div>
          </div>
  )
}

export default page
