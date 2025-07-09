import { FaCaretDown, FaShoppingCart, FaUser } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import Bars from '../../assets/Icons/Bars'
import Logo from '../../assets/Logo (1).png'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

const Header = () => {
  return (
         <>
         <div className="py-[35px]">
            <Container>
                <Flex className={'items-center'}>
                    <div className="">
                      <Image imgSrc={Logo} imgAlt={"Logo"}/>
                    </div>
                    <div className="m-auto">
                      <ul>
                        <li className='inline-block px-[20px] font-display-dm hover:font-bold text-normal hover:text-hoverC text-[14px] duration-300 ease-in-out'>Home</li>
                        <li className='inline-block px-[20px] font-display-dm hover:font-bold text-normal hover:text-hoverC text-[14px] duration-300 ease-in-out'>Shop</li>
                        <li className='inline-block px-[20px] font-display-dm hover:font-bold text-normal hover:text-hoverC text-[14px] duration-300 ease-in-out'>About</li>
                        <li className='inline-block px-[20px] font-display-dm hover:font-bold text-normal hover:text-hoverC text-[14px] duration-300 ease-in-out'>Contacts</li>
                        <li className='inline-block px-[20px] font-display-dm hover:font-bold text-normal hover:text-hoverC text-[14px] duration-300 ease-in-out'>Journal</li>
                      </ul>
                    </div>
                </Flex>
            </Container>
         </div>
{/* header art end  */}
{/* catagory part sttart  */}
         <div className={" py-[25px] bg-categoryBg"}>
              <Container>
                    <Flex className={'justify-between items-center'}>
                      <div className="flex items-center gap-x-3">
                        <Bars/>
                        <h2>Shop by Category</h2>
                      </div>
                      <div className="relative">
                        <input type="text " placeholder='Search Products' className='bg-white p-5 w-[600px] border rounded-xl border-categoryBg' />
                        <IoSearch className="absolute right-[25px] top-1/2 -translate-y-1/2 "/>
                      </div>
                      <div className="flex ">
                           <FaUser  />
                         <FaCaretDown  className="ml-2" />
                        <FaShoppingCart className="ml-9"/>
                      </div>
                    </Flex>
              </Container>
                </div>
         </>
  )
}


export default Header