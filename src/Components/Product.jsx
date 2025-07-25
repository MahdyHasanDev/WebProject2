import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Indur from "../assets/Indur.png";
import Badge from "./Badge";
import Image from "./Image";

const Product = () => {
  return (
   <> 
   <div className="">
       <h1 className="text-black font-display-dm font-bold text-[39px] pb-20">New Arrival</h1>
       <div className="text-black relative group">
       <Image imgSrc={Indur} className={"w-full"} imgAlt={Indur}/>
       <Badge badgeText="New" className={"absolute top-[20px] left-[20px] "}/>
       <div className="bg-white p-7 absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500">
              <Link to="/" style={{    display: "flex", alignItems: "center", textDecoration: "none", justifyContent: "flex-end", gap:"8px" ,fontWeight: "regular", fontSize: "16px", fontFamily:"DM Sans, sans-serif", opacity:"0.6" }} className="font-normal pb-[5px] hover:font-bold hover:text-gray-950">
                     Add to Wish list <FaHeart />
             </Link>
              <Link to="/" style={{    display: "flex", alignItems: "center", textDecoration: "none", justifyContent: "flex-end", gap:"8px" , fontSize: "16px", fontFamily:"DM Sans, sans-serif", opacity:"0.6" }} className="font-normal hover:font-bold pb-[5px] hover:text-gray-950" >
                     Compare <HiMiniArrowPath />

             </Link>
              <Link to="/" style={{    display: "flex", alignItems: "center", textDecoration: "none", justifyContent: "flex-end", gap:"8px" , fontSize: "16px", fontFamily:"DM Sans, sans-serif", opacity:"0.6" }} className="font-normal hover:font-bold pb-[10px] hover:text-gray-950" >
                    Add to Cart < FaShoppingCart/>

             </Link>
             
       </div>
       <div className="relative flex justify-between pt-5">
              <h3 className="font-medium pb-[5px]">Basic Crew Neck Tee</h3>
              <div className="pt-0.5">
              <h5 className="font-display-dm text-[14px] pb-[10px] opacity-70">$44.00</h5></div>
       </div>
       </div>    
  </div>

   </>
  )
}

export default Product


