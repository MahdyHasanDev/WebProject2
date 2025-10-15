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
      
       
    </Container>
</div>
</>
)
}

export default Sells