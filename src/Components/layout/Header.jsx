import { FaCaretDown, FaShoppingCart, FaUser } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"
import Bars from '../../assets/Icons/Bars'
import Logo from "../../assets/Logo (1).png"
import Container from '../Container'
import Flex from '../Flex'
import Image from "../Image"

const Header = () => {
  return (
         <>
      <div className="bg-white">
           <Container >
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-salespartHeadingBg rounded-box z-1 mt-3 w-52 p-2 shadow">
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
    <Link to='/'> 
    <Image imgSrc={Logo} imgAlt={"logo"}/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-x-12 text-center">
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
  
        </div>
        </Container>
      </div>
{/* header art end  */}
{/* catagory part sttart  */}
         <div className={" py-[25px] bg-categoryBg"}>
              <Container>
                    <Flex className={'justify-between items-center'}>
                      <div className="flex items-center gap-x-3">
                        <Bars/>
                        <h2 className="text-black">Shop by Category</h2>
                      </div>
                      <div className="relative">
                        <input type="text " placeholder='Search Products' className='bg-white text-normal p-5 w-[600px] border rounded-xl border-categoryBg' />
                        <IoSearch className="absolute right-[25px] text-black top-1/2 -translate-y-1/2 "/>
                      </div>
                      <div className="flex ">
                           <FaUser  className=" text-black"/>
                         <FaCaretDown  className="ml-2 text-black" />
                        <FaShoppingCart className="ml-9 text-black"/>
                      </div>
                    </Flex>
              </Container>
                </div>
                
         </>
  )
}


export default Header