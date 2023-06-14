import React from 'react';
import './Reasons.css';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';
import Image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import Adidas from '../../assets/adidas.png';
import Nike from '../../assets/nike.png';
import Tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
      <div className="left-r">
        <img src={Image1} alt="Image1"/>
        <img src={Image2} alt="Image2"/>
        <img src={Image3} alt="Image3"/>
        <img src={Image4} alt="Image4"/>        
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
            <span className='stroke-text'>Why </span>
            <span>Choose us?</span>
        </div>
        <div className="details-r">
            <div>
                <img src={Tick} alt="Tick" />
                <span>Over 14+ Expert Coachs</span>
            </div>
            <div>
                <img src={Tick} alt="Tick" />
                <span>Train Smater and Faster than Before</span>
            </div>
            <div>
                <img src={Tick} alt="Tick" />
                <span>1 Free Program for New Members</span>
            </div>
            <div>
                <img src={Tick} alt="Tick" />
                <span>Reliable Partners</span>
            </div>
        </div>
        <span style={{color: 'var(--gray)', fontWeight: 'normal'}}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="nb"/>
          <img src={Adidas} alt="Adidas"/>
          <img src={Nike} alt="Nike"/>
        </div>
      </div>
    </div>
  )
}

export default Reasons;
