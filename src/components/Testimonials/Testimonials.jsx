import React from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  
    const transition = {type: 'tween', duration: 2};

    const [selected, setSelected] = useState(0);
    const tesLength = testimonialsData.length;

  return (
    <div className='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they </span>
        <span>Say about Us</span>
        <motion.span
            key={selected}
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity: 1, x: 0}}
            exit = {{opacity: 0, x: 100}}
            transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color: 'var(--orange'}}>{testimonialsData[selected].name} </span>
            - {testimonialsData[selected].status}
        </span>
      </div>


      <div className="right-t">
        {/* this 2 divs contain the background shapes of person's image */}
        <motion.div
          initial = {{opacity: 0, x: -100}}
          whileInView = {{opacity: 1, x: 0}}
          transition={transition}
        ></motion.div>

        <motion.div
          initial = {{opacity: 0, x: 100}}
          whileInView = {{opacity: 1, x: 0}}
          transition={transition}
        ></motion.div>
        <motion.img 
          key={selected}
          initial = {{opacity: 0, x: 100}}
          animate = {{opacity: 1, x: 0}}
          exit = {{opacity: 0, x: -100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="Tes Image" />
        <div className="arrows">
            <img 
            /* goto backward */
            onClick={() => {
                selected === 0
                    ? setSelected(tesLength - 1)
                    : setSelected((prev) => prev -1);
            }}

            src={leftArrow} alt="left Arrow" />

            <img 
            /* goto forward */
            onClick={() => {
                selected === tesLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
            }}
            src={rightArrow} alt="right Arrow" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
