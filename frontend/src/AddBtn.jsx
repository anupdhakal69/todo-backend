import React, {useState} from 'react'
import axios from 'axios'


const AddBtn = () => {

  return (
   <button className='bg-black uppercase text-white text-xl border-2 border-transparent px-4 rounded hover: hover:bg-gray-900 active:border-2 active:border-black active:bg-transparent active:scale-90 active:text-black duration-200 '>Add</button>
  )
}

export default AddBtn
