import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = () => {
    let [all, setAll] = useState([])

    useEffect(() => {
      async function all() {
        let data = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,capital");
        
        
        setAll(data.data)
      }
      all()
    })
  return (
    <>
<select className='bg-amber-700 text-black'>
  {all.map(item => 
    <option className='text-black bg-amber-200'>{item.region}</option>
  )}
</select>
    </>
  )
}

export default Country