import React from 'react'
import Image from '../Image'
import errorsGif from "../../assets/Error.gif"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="m-auto text-center">
        <Link to={"/"}>
        <button className='py-3 px-5 bg-red-700 text-white'>
            Ei rokom kichu nai
        </button>
        </Link>
<Image imgSrc={errorsGif} className={"w-full h-[200px]"}/>
    </div>
  
  )
}

export default Error