import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 40,
      strings: ['Software'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='top'>
        <div className='imgContainer'>
          <img src='assets/image.jpg' alt='' />
        </div>
      </div>
      <div className='bottom'>
        <div className='wrapper'>
          <h1>Shahmar ALiyev </h1>
          <h3>
            <span ref={textRef}></span> Developer
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='../assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
