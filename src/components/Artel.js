import React from 'react'
import { useState, useEffect } from 'react';

const Artel = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = ['./assets/slideshow/hero.png', './assets/slideshow/hero1.png', './assets/slideshow/hero2.png', './assets/slideshow/hero3.png', './assets/slideshow/hero4.png', './assets/slideshow/hero5.png', './assets/slideshow/hero6.png', './assets/slideshow/hero7.png', './assets/slideshow/hero8.png', './assets/slideshow/hero9.png'];
    useEffect(() => {
        // Slideshow Interval
        const interval = setInterval(() => {
            setImageIndex((imageIndex + 1) % images.length);
        }, 2000)

        return () => clearInterval(interval);
    },[imageIndex, images.length])

  return (
    <div>
        <div className='artel'>
            <div className='slideshow'>
                <img src={images[imageIndex]} alt='slideshow' className='slideshowImg' />
            </div>
            <div className='artelPostBottom bg-gradient-to-r from-gray-50 to-stone-300'>
                <div className='iconContainer'>
                <img src="./assets/redHeart.png" alt="like" className="icon animate-pulse" />
                <img src="./assets/comments.png" alt="comment" className="icon" />
                </div>
                <p className='artelPostTag'>@ARTEL</p>
            </div>
        </div>
    </div>
  )
}

export default Artel