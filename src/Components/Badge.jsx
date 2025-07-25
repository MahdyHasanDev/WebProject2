
const Badge = ({badgeText,className}) => {
  return (

   <div className={`py-2 px-8 bg-hoverC w-[92px] text-white text-[14px] font-display-dm font-bold ${className}`}>{badgeText}</div>
   
  )
}

export default Badge