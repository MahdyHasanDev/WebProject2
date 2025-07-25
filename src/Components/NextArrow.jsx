import { CiCircleChevLeft } from "react-icons/ci";


const NextArrow = (props
) => {
    const { onClick } = props;

  return (
    <div className={"text-5xl text-red-500 absolute right-6 top-1/2 -translate-y-1/2"} onClick={onClick}
    ><CiCircleChevLeft /></div>
  );  
}

export default NextArrow

