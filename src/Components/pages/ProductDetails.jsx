import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import sunglass from '../../assets/sunglass.png'
import jhuri from '../../assets/jhuri2.png'
import headphone from '../../assets/headphone.png'
import chair from '../../assets/chair.png'
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
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
        <div className="">
            <h3>
                Color: <input type="color"/>
            </h3>
        </div>
    </div>
</Container>
</div>

</>

)
}

export default ProductDetails