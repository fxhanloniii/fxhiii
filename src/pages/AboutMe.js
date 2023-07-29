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

  const text2 = {
    title: 'Background',
    additionalInfo: (
      <>
      <h3 className="background">Frankie offers a powerful combination of software engineering expertise and a creative marketing background, complemented by skills in social media strategy, photo, and video production. <br />This unique blend allows him to bring a fresh perspective to the team, delivering innovative solutions that seamlessly integrate technology and creativity. With a keen eye for visual storytelling and experience in crafting successful marketing campaigns, Frankie's diverse skill set adds value to any project, ensuring captivating user experiences and effective audience engagement.</h3>
      <div className="icons iconsbackground">
        <img src='assets/skillIcons/premiere-pro.png' alt="icon"/>
        <img src='assets/skillIcons/creative.png' alt="icon"/>
        <img src='assets/skillIcons/figma.png' alt="icon"/>
        <img src='assets/skillIcons/social-media.png' alt="icon"/>
        <img src='assets/skillIcons/photoshop.png' alt="icon"/>
      </div>
      </>
    ),
  }
  const images = [
    {src:'./assets/aboutMeImages/headshot.jpeg', text: text1},
    {src:'./assets/aboutMeImages/action.jpg', text: text2},
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