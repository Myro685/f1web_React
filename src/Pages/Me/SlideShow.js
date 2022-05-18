import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import One from './Photos/one.jpg';
import Two from './Photos/two.jpg';
import Three from './Photos/three.jpeg';
import Four from './Photos/four.jpg';

const fadeImages = [
  {
    url: One,
    caption: 'To nejsem já'
  },
  {
    url: Two,
    caption: 'Tohle jsem já jako Sugar denny'
  },
  {
    url: Three,
    caption: 'Tady běhám'
  },
  {
    url: Four,
    caption: 'Tady jsem s kočkou'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img className='slide-img' src={fadeImage.url} alt='SlideShow' />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;