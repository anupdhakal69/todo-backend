import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Tasks = () => {

  const [data, setData] = useState([])

  const getTasks = async () => {
    const response = await axios.get("http://localhost:3669")
    console.log(response);
    setData(response?.data?.task)
  }

  useEffect(()=> {
    getTasks()
  },[])

  return (
    <>
    {data.map(item => (
      <div key={item._id} className='border border-gray-300 bg-gray-100 rounded-md shadow-xl w-1/3 mx-auto mt-4 text-2xl px-3 py-2 '>{item.task}</div>
    ))}
    </>
  )
}

export default Tasks
