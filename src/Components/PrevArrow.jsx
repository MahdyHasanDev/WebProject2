import { CiCircleChevRight } from "react-icons/ci";

const PrevArrow = (props) => {
    const { onClick } = props;

  return (
      <div className={"text-5xl text-gray-500 absolute left-6 top-1/2 z-10 -translate-y-1/2"}
      onClick={onClick}
    ><CiCircleChevRight /></div>
  );  
}

export default PrevArrow




