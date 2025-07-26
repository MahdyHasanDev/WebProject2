import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import Image from "./Image";
import Flex from "./Flex";



const Product = ({productImg,badgeText,badgePrice,bajText}) => {
       
  return (
   <> 
                                         {/* <h1 className="text-black font-display-dm font-bold text-[39px] pb-20">New Arrival</h1> */}

       <div className="text-black relative group">
<Image imgSrc={productImg} className={"w-full"} imgAlt="dcvcasxs" />
       <Badge badgeText={bajText} className={"absolute top-[20px] left-[20px] "}/>
       <div className="bg-gray-50 p-5 absolute left-0 bottom-[35px] w-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500 ">
              <Link to="/" >
              <Flex className={"items-center gap-x-2 justify-end font-display-dm  text-[16px] text-[#767676] hover:text-hoverC "  }>
                                         Add to Wish list <FaHeart />
              </Flex>
             </Link>
                           <Link to="/" >
              <Flex className={"items-center gap-x-2 justify-end font-display-dm py-2 text-[16px] text-[#767676] hover:text-hoverC "}>
                                         Compare <HiMiniArrowPath />
              </Flex>
             </Link>
                           <Link to="/" >
              <Flex className={"items-center gap-x-2 justify-end font-display-dm text-[16px] text-[#767676] hover:text-hoverC "}>
                                         Add to Cart <FaShoppingCart />
              </Flex>
             </Link>
             
       </div>
       <div className="text-black flex justify-between p-2">
              <h3 className="font-bold">{badgeText}</h3>
              <p className="font-display-dm text-[16px] text-[#767676]">{badgePrice}</p>
       </div>
       </div>    
  

   </>
  )
}

export default Product


