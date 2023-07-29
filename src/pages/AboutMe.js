import React, { useState } from 'react'
import GameBoy from '../components/GameBoy'

const AboutMe = () => {

  const images = [
    {src:'headshot.jpeg', text: 'Head Shot Image'},
    {src:'mammoth.jpg', text: 'Mammoth Sking Image'},
  ]

  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }

  return (
    <div className="aboutMe">
      <h1 className="aboutMeH1">About Me</h1>
      <div className="aboutMeContainer">
        <div className="aboutMeText">
          <p>{images[currentImage].text}</p>
        </div>
        <div className="gameBoyContainer">
          <GameBoy currentImage={images[currentImage].src} handleNextImage={handleNextImage} handlePrevImage={handlePrevImage} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe