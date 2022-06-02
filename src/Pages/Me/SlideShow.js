import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import One from './Photos/one.jpeg';
import Two from './Photos/two.jpg';
import Three from './Photos/three.jpeg';

const fadeImages = [
  {
    url: One,
    caption: 'Dovolená v Itálii'
  },
  {
    url: Two,
    caption: 'Klobouček by celkem ušel'
  },
  {
    url: Three,
    caption: 'Zimní focení'
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