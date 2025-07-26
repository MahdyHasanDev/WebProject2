import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import sunglass from '../../assets/sunglass.png'
import jhuri from '../../assets/jhuri2.png'
import headphone from '../../assets/headphone.png'
import chair from '../../assets/chair.png'
import { FaStar } from "react-icons/fa";
import Button from '../../Components/Button'
// for quantity 
import { useState } from "react";



// for quantity 


const ProductDetails = () => {

      const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (

<>
<div className="">
    <Container>
    <Flex className={"gap-x-4"}>
        <div className="">
            <Image imgSrc={jhuri}/>
        </div>
        <div className="">
            <Image imgSrc={sunglass}/>
        </div>
    </Flex>
    <Flex className={"gap-x-4 mt-4"}>
        <div className="">
            <Image imgSrc={headphone}/>
        </div>
        <div className="">
            <Image imgSrc={chair}/>
        </div>
    </Flex>
    <div className="">
        <h1 className={"text-[#262626] font-bold text-[39px]"}>Product</h1>
        <Flex>
            <FaStar className={"text-[#FFD881]"}/>
            <FaStar className={"text-[#FFD881]"}/>
            <FaStar className={"text-[#FFD881]"}/>
            <FaStar className={"text-[#FFD881]"}/>
            <FaStar className={"text-[#FFD881]"}/>
                <p className="pl-5 text-[12px] text-[#767676]">1 Review</p>
        </Flex>
        <Flex className={"gap-x-8"}>
            <del className={"text-[#767676]"}>$88.00</del>
            <h2 className={"text-[#262626] font-bold"}>$44.00</h2>
        </Flex>
</div>

        <div className={"h-0.5 w-165 bg-gray-100 mt-8 mb-8"}></div>


       <div className={"flex gap-x-3 items-center "}>
  <h3 className="text-[#262626] font-bold flex items-center gap-2">
    COLOR:  </h3>
    <input
      type="color"
      defaultValue="#979797"
      className="color-input ml-7 w-4 h-4 rounded-full border-none p-0 appearance-none hover:w-6 hover:h-6 cursor-pointer"
    />
    <input
      type="color"
      defaultValue="#979797"
      className="color-input w-4 h-4 rounded-full border-none p-0 appearance-none hover:w-6 hover:h-6 cursor-pointer"
    />
    <input
      type="color"
      defaultValue="#7ED321"
      className="color-input w-4 h-4 rounded-full border-none p-0 appearance-none hover:w-6 hover:h-6 cursor-pointer"
    />
    <input
      type="color"
      defaultValue="#B6B6B6"
      className="color-input w-4 h-4 rounded-full border-none p-0 appearance-none hover:w-6 hover:h-6 cursor-pointer"
    />
    <input
      type="color"
      defaultValue="#15CBA5"
      className="color-input w-4 h-4 rounded-full border-none p-0 appearance-none hover:w-6 hover:h-6 cursor-pointer"
    />
 
</div>
<div className="flex gap-x-1 items-center">
    <h2 className="text-[#262626] font-bold flex items-center gap-2">SIZE:</h2>
    <div className="p-4 ml-11 ">
      <Button className={"text-[#767676]"}>
        <select name="" id="">
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
        </select>
      </Button>
    </div>
   
</div>
 {/* for quantity selector  */}
 <div className={"flex gap-x-4 items-center"}>
        
          <h2 className="text-[#262626] font-bold flex items-center gap-2">QUANTITY:</h2>
        
        <button className="flex items-center gap-2 w-19 h-7 justify-center border border-[#F0F0F0] text-[#767676] hover:bg-gray-100">
          <button
            onClick={decrease}
            className="">
            -
          </button>
          <span className="w-8 text-center text-[#767676]">{quantity}</span>
          <button
            onClick={increase}
            className="">
            +
          </button>
        </button>
      </div>
         <div className={"h-0.5 w-165 bg-gray-100 mt-8 mb-8"}></div>
</Container>

    </div>
  



 {/* for quantity selector  */}
        
    {/* w-4 h-4 flex items-center justify-center border border-gray-400 text-gray-700 hover:bg-gray-100 */}
    {/* w-4 h-4 flex items-center justify-center border border-gray-400 text-gray-700 hover:bg-gray-100 */}

</>

)
}

export default ProductDetails