import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
        <div className='absolute top-9 ;eft-0 w-full
        h-full flex justify-center items-center'> 
        <div className='w-[10vw] h-[10vw] rounded-full'>
            Loading...
        </div>
        </div>
    </Html>
  )
}

export default Loader