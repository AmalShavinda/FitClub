import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import { Link } from 'react-scroll';

const Hero = () => {

  const transition = {type: 'tween', duration: 2};
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className='hero'>
      <div className="blur blur-h"></div>
      <div className="left">
        <Header/>
        {/* The best add */}
        <div className="the-best-ad">
            <motion.div
            initial = {{left: mobile ? '165px' : '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
            ></motion.div>
            <span>The best fitness club in the town</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
                <span>In here we will help you to shape and build your ideal body and live up your life fullest</span>
            </div>
        </div>

        {/* Figures */}
        <div className="figuers">
          <div>
            <span><NumberCounter end={14} start={1} delay='2' preFix='+'/></span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={700} delay='2' preFix='+'/></span>
            <span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={25} delay='2' preFix='+'/></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right">
        <button className='btn'><Link to='join' span={true} smooth={true}>Join Now</Link></button>
        <motion.div 
        transition = {transition}
        initial = {{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        className="heart-rate">
          
          <img src={Heart} alt='Heart'/>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image */}
        <div className="hero-img">
          <img src={hero_image} alt='Hero Image' className='hero-image'/>
          <motion.img 
          initial = {{right: '11rem'}}
          whileInView = {{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt='Hero Image Back' className='hero-image-back'/>
        </div>

        {/* Calories */}
        <motion.div 
        initial = {{right: '37rem'}}
        whileInView = {{right: '28rem'}}
        transition={transition}
        className="calories">
          <img src={Calories} alt='Calories'/>
          <div>
            <span>Calories Burned</span>
            <span>220 kCal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
