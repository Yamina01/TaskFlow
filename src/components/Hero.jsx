import { motion } from "framer-motion";
import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
        <motion.div
        className="hero-content"
        initial={{opacity:0 , y:40}}
        animate={{opacity:1 , y:0}}
        transition={{duration:0.8}}
        >
            <h1>Manage Your Work Smarter with TaskFlow</h1>
            <p>TaskFlow helps teams plan, track, amd deliver projects faster.
                All in one powerful platform. </p>
            
            <div className="hero-buttons">
                <button className="primary-btn">Start Free Trial</button>
                <button className="secondary-btn">Learn More</button>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero