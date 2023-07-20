import React, { useState } from 'react';
import FloatingCube from './FloatingCube'
import { Link } from 'react-router-dom';

const Header = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='header'>
      <img src='/assets/whitelogonb2.png' alt='logo' />
      <div className='links'>
        <Link to='/'><p>// Home</p></Link>
        <Link to='/aboutme'><p>// About Me</p></Link>
        <Link to='/projects'><p>// Projects</p></Link>
      </div>
      <div className='dropdown-button' onClick={toggleDropdown}>
          <FloatingCube />
      </div>
      <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
        <div className='dropdown-content'>
            <Link to='/' onClick={toggleDropdown}><p>// Home</p></Link>
            <Link to='/aboutme' onClick={toggleDropdown}><p>// About Me</p></Link>
            <Link to='/projects' onClick={toggleDropdown}><p>// Projects</p></Link>
        </div>
      </div>
        
      
    </div>
  )
}

export default Header