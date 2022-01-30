import { useState, useEffect } from 'react';
import { useInterval } from '../../usehooks/useInterval';
import { ReactComponent as SVGPlay } from '../../svg/play.svg';
import { ReactComponent as SVGPause } from '../../svg/pause.svg';
import './index.sass';


const Computer = () => {
  const [buttonOnOf, setbuttonOnOf] = useState(true);
  const [subtitle, setSubtitle] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  
  const introText = `I'm Emilia and I love to code!`;

  const addLetters = (word: string, textState: string, textStateFuntion: any) => {
    const wordLength = word.length;
    if (wordLength === textState.length) {
      setbuttonOnOf(false)
      return
    }
    else {
      textStateFuntion(textState.concat(word[letterIndex]));
      setLetterIndex(letterIndex + 1)
    }
  };

  useInterval(
    () => {
      addLetters(introText, subtitle, setSubtitle)
    },
    // Delay in milliseconds or null to stop it
    buttonOnOf ? 250 : null,
  );
  
  const handleChange = () => {
    if (subtitle === introText) {
      setSubtitle("");
      setLetterIndex(0);
      setbuttonOnOf(prevValue => !prevValue)
    }
    else {
      setbuttonOnOf(prevValue => !prevValue);
    }
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout1);
  }, [blink]);
 
  const playButton = <SVGPlay className="play" onClick={handleChange} />;
  const pauseButton = <SVGPause className="play" onClick={handleChange} />
  const className = "computer"

    return (
      <div className = {className}>
        <div className={`${className}__monitor`}>
          <div className={`${className}__header tag`}>&lt;</div>
          <h2
            className={`${className}__header`}>Hello World!
          </h2>
          <h2 className={`${className}__subtitle`}>
            {subtitle}
            <span
              className="blink" >
              {blink ? "|" : " "}
            </span>
          </h2>
          <div className={`${className}__header tag`}>&gt;</div>
        </div>
        
        <div className={`${className}__base`}>
          {buttonOnOf ? pauseButton : playButton}
        </div>
      </div>
      );
    
  }

export default Computer