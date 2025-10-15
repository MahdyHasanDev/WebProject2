import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../../assets/Logo (1).png"
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"


const Footer = () => {
  return (
   <>
   <div className="bg-[#F5F5F3] mt-[150px] py-[60px]">
    <Container>
      <Flex>
        <div className="w-[15%]">
          <h1 className="text-black font-display-dm font-bold text-[16px] mb-5">Menu</h1>
          <ul>
            <Link to="/">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Home</li>
      </Link>
      <Link to="/shop">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Shop</li>
      </Link>
      <Link to="/about">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">About</li>
      </Link>
      <Link to="/contact">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Contacts</li>
      </Link>
      <Link to="/journal">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Journal</li>
      </Link>
          </ul>
        </div>
        <div className="w-[15%]">
          <h2 className="text-black font-display-dm font-bold text-[16px] mb-5">Shop</h2>
          <ul>
            <Link to="/">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Category1</li>
      </Link>
      <Link to="/shop">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Category2</li>
      </Link>
      <Link to="/about">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Category3</li>
      </Link>
      <Link to="/contact">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Category4</li>
      </Link>
      <Link to="/journal">
      <li className="text-black text-[14px] font-display-dm opacity-70 hover:text-hoverC hover:font-bold hover:opacity-100">Category5</li>
      </Link>
          </ul>
        </div>
        <div className="w-[15%]">
          <h2 className="text-black font-display-dm font-bold text-[16px] mb-5">Help</h2>
          <ul>
            <li className="text-[#6D6D6D] font-display-dm text-[14px] ">Privacy Policy</li>
            <li className="text-[#6D6D6D] font-display-dm text-[14px] ">Terms & Conditions</li>
            <li className="text-[#6D6D6D] font-display-dm text-[14px] ">Special E-shop</li>
            <li className="text-[#6D6D6D] font-display-dm text-[14px] ">Shipping</li>
            <li className="text-[#6D6D6D] font-display-dm text-[14px] ">Secure Payments</li>
          </ul>

        </div>
        <div className="w-[30%]">
          <h2 className="font-display-dm font-bold text-[18px] text-[#262626]">(052) 611-5711</h2>
          <h2 className="font-display-dm font-bold text-[18px] text-[#262626]">company@domain.com</h2>
          <p className="font-display-dm font-regular text-[14px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</p>
        </div>
        <div className="w-[25%] ">
       <Link to='/'> 
    <Image imgSrc={logo} imgAlt={"logo"}/>
    </Link>
        </div>
       
      </Flex>
      
      <Flex className={"justify-between"}>
        <div className="flex items-center pt-15 gap-x-5">
          <FaFacebookF className="text-black "/>
<FaLinkedinIn className="text-black "/>
<FaInstagram className="text-black "/>
        </div>
        <div className="pt-15">
          <h2 className="font-display-dm font-regular text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
        </div>
      </Flex>
    </Container>
   </div>
   </>
  )
}

export default Footer
