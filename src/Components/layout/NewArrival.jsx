import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'

const NewArrival = () => {
  return (
    <>
    <div className="bg-white py-20">
    <Container>
        <Flex>
            <div className="w-1/4">
            <Product/>
            </div>
        </Flex>
    </Container>
    </div>
    </>
  )
}

export default NewArrival