import React from 'react'
import InputBox from './InputBox'
import AddBtn from "./AddBtn"
import Tasks from './Tasks'

const App = () => {
  return (
    <div className='font-outfit h-screen flex flex-col justify-center items-center'>

      <div className='flex gap-4 mt-80'>
        <InputBox />
        <AddBtn />
      </div>

      <Tasks />
      
    </div>
  )
}

export default App
