import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Buttons, Indicator} from './components';
import img1 from '../image/carousel_1.jpg'
import img2 from '../image/carousel_2.jpg'
import img3 from '../image/carousel_3.jpg'

const imgs = [img1, img2, img3]

const Wrapper = styled.div`
  position: relative;
  max-width: 800px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
`;
const Slide = styled.div`
  display: flex;
  // responsive image
  transform: ${({xPosition}) => `translateX(${xPosition}px)`}; // move to next slide
  transition: ${({isAnimated}) => isAnimated && `transform 0.5s ease-in-out`};

  img {
    max-width: 100%;
    width: 100%;
  }
`;

function Carousel({
                    images,
                    // setWidth,
                    // xPosition,
                    // handleClickPrev,
                    // handleClickNext,
                  }) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);

  const handleClickPrev = () => {
    setIsAnimated(true)
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
    setIsAnimated(true)
    // console.log(`is animated ${isAnimated}`)
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };
  const slideRef = useRef();

  const changeSlideHandler = (index) => {
    console.log(`clicked and index is ${index}`)
    setIsAnimated(true)
    setIndex(index);
    setXPosition(xPosition - index * width);
  }

//TODO
  useEffect(() => {
    console.log('reached here')
    const updateSize = () => {
      if (slideRef.current) {
        const width = slideRef.current.clientWidth;
        setWidth(width);
        setXPosition(-(width * index));
        console.log(xPosition)
      }
    }
    updateSize();

    const handleResize = () => {
      setIsAnimated(false);
      // console.log(isAnimated);
      updateSize();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setWidth, index, isAnimated, xPosition]);

  return (
      <Wrapper className={"carouselWrapper"}>
        <Slide xPosition={xPosition} ref={slideRef} isAnimated={isAnimated}>
          {images.map((img, i) => {
            // todo how to pass image urls as a parameter
            // eslint-disable-next-line
            return (<img src={`${imgs[i]}`} alt={`carousel ${i + 1}`} key={i}/>)
          })}

        </Slide>
        <Buttons
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
        />
        <Indicator numImages={images.length} currentImageIndex={index} changeSlideHandler={changeSlideHandler}/>
      </Wrapper>
  );
}

export default Carousel;
