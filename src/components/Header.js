import React from 'react'
import FloatingCube from './FloatingCube'

const Header = () => {
  return (
    <div className='header'>
        <img src='/assets/whitelogonb2.png' />
        <div className='links'>
            <p>// Home</p>
            <p>// About Me</p>
            <p>// Projects</p>
            <FloatingCube />
        </div>  
    </div>
  )
}

export default Header