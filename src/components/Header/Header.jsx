import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpend] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt='Logo' className='logo'/>
      {(menuOpened===false && mobile===true)? (
        <div 
          style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
          onClick={() => setMenuOpend(true)}
          >
          <img src={Bars} alt="Bars" style={{width: '1.5rem', height: '1rem'}} />
        </div>
      ):
      (
        <ul className='header-menu'>
        <li>
          <Link onClick={() => setMenuOpend(false)} activeClass='active' to='hero' span={true} smooth={true}>Home</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpend(false)} to='programs' span={true} smooth={true}>Programs</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpend(false)} to='reasons' span={true} smooth={true}>Why Us</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpend(false)} to='plans-container' span={true} smooth={true}>Plans</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpend(false)} to='testimonials' span={true} smooth={true}>Testimonials</Link>
        </li>
      </ul>
      )}
    </div>
  )
}

export default Header;
