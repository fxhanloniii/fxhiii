import React, { useState, useEffect } from 'react'

const GameBoy = ({ currentImage, handleNextImage, handlePrevImage }) => {

    const [showBlinkAnimation, setShowBlinkAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowBlinkAnimation(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);

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
                <div className={`bButton ${showBlinkAnimation ? 'blink-animation' : ''}`}>
                    <button className="buttonB" onClick={handlePrevImage}>B</button>
                </div>
                <div className={`aButton ${showBlinkAnimation ? 'blink-animation' : ''}`}>
                    <button className="buttonA" onClick={handleNextImage}>A</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameBoy