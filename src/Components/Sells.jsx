import pera from "../assets/perarakib.png"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"

const Sells = () => {
  return (

<>
<div className="bg-white">
    <Container>
       <Flex>
          <div className="w-1/2">
          <Image imgSrc={pera}/>
          </div>
          <div className="w-1/2"></div>
       </Flex>
    </Container>
</div>
</>
)
}

export default Sells