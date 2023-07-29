import React from 'react'
import GameBoy from '../components/GameBoy'

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1 className="aboutMeH1">About Me</h1>
      <div ckassName="aboutMeContainer">
        <div className="aboutMeText">

        </div>
        <div className="gameBoyContainer">
          <GameBoy />
        </div>
      </div>
    </div>
  )
}

export default AboutMe