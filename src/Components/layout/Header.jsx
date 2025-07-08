import Logo from '../../assets/Logo (1).png'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

const Header = () => {
  return (
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
  )
}


export default Header