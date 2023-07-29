import React from 'react'

const GameBoy = ({ currentImage, handleNextImage, handlePrevImage }) => {

  return (
    <div className="gameBoy">
        <div className="screenBorder">
            <div className="screen">
                {/* Image Slide Show When User Clicks A or B Button */}
            </div>
        </div>
        <div className="buttons">
                <div className="dpad">
                    <div className="dpad-up"><button className="up"></button></div>
                    <div className="dpad-down"><button className="down"></button></div>
                    <div className="dpad-left"><button className="left"></button></div>
                    <div className="dpad-right"><button className="right"></button></div>
                    <div className="dpad-middle"></div>
                </div>
            <div className="ab">
                <div className="bButton">
                    <button className="buttonB">B</button>
                </div>
                <div className="aButton">
                    <button className="buttonA">A</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameBoy