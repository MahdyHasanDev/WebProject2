import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { PiNumberTwoBold } from "react-icons/pi";
import Container from './Container';
import Flex from './Flex';

const SalesPart = () => {
  return (

<>
<div className="bg-salespartHeadingBg py-[25px]">
    <Container>
        <Flex className={'justify-between items-center '}>
            <div className="flex">
                <PiNumberTwoBold className="text-One  text-black"/>
                <h2 className="ml-[10px]  text-black">Two years warranty</h2>
            </div>
            <div className="flex">
                <FaTruck className="text-One  text-black"/> 
                <h2 className="ml-[15px]  text-black">Free shipping</h2>
            </div>
            <div className="flex">
                <FaArrowRotateLeft className="text-One  text-black " />
                <h2 className="ml-[15px]  text-black">Return policy in 30 days</h2>
            </div>
        </Flex>
    </Container>
</div>
</>

)
}

export default SalesPart