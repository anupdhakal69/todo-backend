import React from 'react'
import InputBox from './InputBox'
import AddBtn from "./AddBtn"

const App = () => {
  return (
    <div className='font-outfit h-screen flex flex-col justify-center items-center'>
      <div className='flex gap-3'>
        <InputBox />
        <AddBtn />
      </div>
    </div>
  )
}

export default App
