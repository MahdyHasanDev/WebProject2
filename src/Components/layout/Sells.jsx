import { Link } from "react-router-dom"
import bu from "../../assets/buka.png"
import pera from "../../assets/perarakib.png"
import vu from "../../assets/vuka.png"
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"

const Sells = () => {
  return (

<>
<div className="py-35 bg-white">
    <Container>
       <Flex className={"justify-between gap-x-10"}>
         <div className="w-1/2 relative">
            <Link to={"/"}>
               <Image imgSrc={pera} imgAlt={"pera"} className={"w-full"}/>
         </Link>
            </div>
           
          <div className="w-1/2">
           <div className="">
                  <Link to={"/"}>
                  <Image imgSrc={bu} imgAlt={"bu"}/>
                  </Link>
               </div>
               <div className="mt-8">
                   <Link to={"/"}>
                  <Image imgSrc={vu} imgAlt={"vu"}/>
                  </Link>
               </div></div>
       </Flex>
       <div className="W-1/4">
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Nike Shoe</h2>
    <p>Nike Shoe has a figure, a body part, and a luxaroius Feeling</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mr-[120px]">Buy Now</button>
    </div>
  </div>
</div>
       </div>
       
    </Container>
</div>
</>
)
}

export default Sells