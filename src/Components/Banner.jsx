import { Link } from "react-router-dom"

const Banner = () => {
  return (

    <>
    <Link to={'https://www.creativeitinstitute.com/'}>
        <div className="bg-[url('/Banner.png')] bg-cover bg-center py-[300px]"></div>

    </Link>
    </>

)
}

export default Banner