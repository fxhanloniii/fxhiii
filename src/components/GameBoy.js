import React from 'react'

const GameBoy = ({ currentImage, handleNextImage, handlePrevImage }) => {

  return (
    <div className="gameBoy">
        <div className="screenBorder">
            <div className="screen">
                {/* Image Slide Show When User Clicks A or B Button */}
                <img src={currentImage} alt="slideshow"/>
            </div>
        </div>
        <div className="buttons">
                <div className="dpad">
                    <div className="dpad-up"><button className="up"></button></div>
                    <div className="dpad-down"><button className="down"></button></div>
                    <div className="dpad-left"><button className="left" onClick={handlePrevImage} ></button></div>
                    <div className="dpad-right"><button className="right" onClick={handleNextImage} ></button></div>
                    <div className="dpad-middle"></div>
                </div>
            <div className="ab">
                <div className="bButton">
                    <button className="buttonB" onClick={handlePrevImage}>B</button>
                </div>
                <div className="aButton">
                    <button className="buttonA" onClick={handleNextImage}>A</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameBoy