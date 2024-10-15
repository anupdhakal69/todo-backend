import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Tasks = () => {

  const [data, setData] = useState([])

  const getTasks = async () => {
    
    try {
      
      const response = await axios.get("http://localhost:3669")
      setData(response?.data || [])
      console.log(response.data);

    } catch (error) {
      console.error(error,"bado error");
      setData(error)
    }
  }

  useEffect(()=> {
    getTasks()
  },[])

  return (
    <div className='w-1/3'>
    {data.map(item => (
        <div key={item._id} className='border border-gray-300 bg-gray-100 rounded-md shadow-lg  mx-auto mt-4 text-xl px-3 py-2 flex justify-between items-center'><input type="checkbox" name="" id="" /> {item.task} <img src="bin.png" className='w-5 h-5 cursor-pointer' alt="" /></div>
    ))}
    </div>
  )
}

export default Tasks
