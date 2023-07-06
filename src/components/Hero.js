import React, { useEffect, useRef } from 'react';


const Hero = () => {
  const phrases = [
    "A Software Engineer.",
    "A Creative.",
    "A Full Stack Developer.",
    "A Problem Solver."
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseTime = 1000; // Adjust the pause time (in milliseconds) if desired

  const textElementRef = useRef(null);
  let animationFrameId = null;

  const typeOut = () => {
    const currentPhrase = phrases[index];
    const textElement = textElementRef.current;
    let currentText = textElement.textContent;

    if (isDeleting) {
      currentText = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    textElement.textContent = currentText;

    if (!isDeleting && currentText === currentPhrase) {
      isDeleting = true;
      animationFrameId = requestAnimationFrame(() => {
        setTimeout(typeOut, pauseTime);
      });
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      index = (index + 1) % phrases.length;
      animationFrameId = requestAnimationFrame(() => {
        setTimeout(typeOut, typingSpeed);
      });
    } else {
      animationFrameId = requestAnimationFrame(typeOut);
    }
  };

  useEffect(() => {
    typeOut();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <div className='container'>
      <div className='hero'>
        <div className='intro'>
          <h1>Hello. I'm Frankie.</h1>
          <p ref={textElementRef} id="typing-text"></p>
        </div>
        <div className='particleContainer'>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;



