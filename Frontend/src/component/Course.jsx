import React from 'react'
import Cards from "./Cards"
import List from "../../public/List.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
                We're delighted to have you{" "} 
                <span className="text-pink-500"> Hear! :) </span>
            </h1>
            <p className="mt-12">
                We read books to find out who we are. What other people,real or imaginary,do and think 
                and feel...is an essential guide to our understanding of what we ourselves are and may become.
                There’s no doubt about it, everyone loves reading books for different reasons. Some people like the escape it provides from reality, some people enjoy the connections to the 
                characters they experience in each book and other people love learning things from what they read. 

            </p>
           <Link to="/">
           <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
           </button>
           </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                List.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
        
            }
        </div>

    </div>
    </>
  )
}

export default Course
