
const Container = ({className,children}) => {
  return (
    <div className={`max-w-mContainer m-auto ${className}`}>{children}</div>
  )
}

export default Container