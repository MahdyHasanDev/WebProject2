import React, { useRef, useState } from 'react'
import Container from './Container';

const Understanging = () => {
     // useState 
    let [count, setCount] = useState(0);
    // useState 
//     // useRef 
let [error, seterror] = useState(false);
       let countRef = useRef;
         let handleClick2=()=>{
            console.log(countRef.current++);
            if (countRef.current==5){
            seterror(true)
            }
   }
//     // useRef 
    
    // useState 
    let handleClick=()=>{
        count++
        setCount(count);
    }
    // useState 

    
  return (
    <Container >
        {/* useState  */}
        <h1 className='text-black'>For useState</h1>
        <h1 className='text-black'>{count}</h1>
        <button className='text-black' onClick={handleClick}>Click</button>
        {/* useState  */}
        {/* useRef  */}
        <h1 className='text-black'>For useRef</h1>
        <h1 className='text-black'>{countRef.current++}</h1>
        <button className='text-black' onClick={handleClick2}>Click2</button>
     { error &&  <h1>block for 56 minutes</h1>}
        {/* useRef  */}
    </Container>
  )
}

export default Understanging