// import React from 'react'
import Link from "next/link";

const Hero_section = (props) => {
  return (
    <>
    <br /><br /><br /><br />
    <div className="   h-96   mb-64 lg:mb-0"  >
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-auto   py-10 w-4/5 ">
        <div className="mt-3">
            <h1 className="text-3xl font-bold">{props.title} </h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem fugiat iusto sunt in explicabo veritatis quos, soluta alias facilis laborum saepe doloribus corrupti natus adipisci itaque nesciunt! Cumque officia cum temporibus repellat sunt nihil vero, voluptatum recusandae necessitatibus excepturi, veniam sint quod molestias. Pariatur, deleniti dolores! Officiis quaerat illo magni!</p>
            <Link href="/movie" className="">
            <button className="p-2 rounded-full text-white mt-5 bg-black font-bold hover:bg-white hover:text-black border">
                Explore movie
            </button>
            </Link>
        </div>
        <div className=" mt-3 mb-3 sm:mt-2 lg:px-3">
        
            <img  className="  w-full  h-1/2  " src={props.img} alt="image"  />
         
        </div>
    </div>
    
    </div>
      
    </>
  )
}

export default Hero_section
