import React, { useState } from 'react'
import GameBoy from '../components/GameBoy'

const AboutMe = () => {
  const text1 = {
    title: 'Frankie Hanlon',
    description: 'Software Engineer\n Located In Los Angeles, CA',
    additionalInfo: (
      <>
      <h3 className="summary">A Full-Stack Developer with a creative background who brings a curious and diligent mindset, always striving for ongoing growth and development.</h3>
      <div className="resumeDiv">
        <a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>
      <div className="icons">
        <img src='assets/skillIcons/react.png' alt="icon"/>
        <img src='assets/skillIcons/java-script.png' alt="icon"/>
        <img src='assets/skillIcons/python.png' alt="icon"/>
        <img src='assets/skillIcons/database-storage.png' alt="icon"/>
      </div>
      <div className="icons">
        <img src='assets/skillIcons/css-3.png' alt="icon"/>
        <img src='assets/skillIcons/django.png' alt="icon"/>
        <img src='assets/skillIcons/docker.png' alt="icon"/>
        <img src='assets/skillIcons/nodejs.png' alt="icon"/>
      </div>
      </>
    ),
  }
  const images = [
    {src:'./assets/aboutMeImages/headshot.jpeg', text: text1},
    {src:'./assets/aboutMeImages/action.jpg', text: 'Experience'},
    {src:'./assets/aboutMeImages/mammoth.jpg', text: 'Mammoth Sking Image'},
    {src:'./assets/aboutMeImages/mammoth.jpg', text: 'Mammoth Sking Image'},
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
          <p className="textTitle">{images[currentImage].text.title}</p>
          <p className="textDescription" style={{ whiteSpace: 'pre-line' }}>{images[currentImage].text.description}</p>
          <div>
            {images[currentImage].text.additionalInfo}
          </div>
        </div>
        <div className="gameBoyContainer">
          <GameBoy currentImage={images[currentImage].src} handleNextImage={handleNextImage} handlePrevImage={handlePrevImage} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe