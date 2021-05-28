import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Buttons, Indicator} from './components';

const Wrapper = styled.div`
  position: relative;
  //max-width: fit-content;
  //max-height: 400px;
  max-width: 60%;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
`;
const Slide = styled.div`
  display: flex;
  // responsive image
  transform: ${props => `translateX(${props.xPosition}px)`}; // move to next slide
  transition: transform 0.5s ease-in-out;

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

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
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
    setIndex(index);
    setXPosition(xPosition - index * width);
  }


  useEffect(() => {
    const updateSize = () => {
      if (slideRef.current) {
        const width = slideRef.current.clientWidth;
        setWidth(width);
        setXPosition(-(width * index));
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
  }, [setWidth, index]);

  return (
      <Wrapper className={"carouselWrapper"}>
        <Slide xPosition={xPosition} ref={slideRef}>
          {images.map((img, i) => {
            // eslint-disable-next-line
            return (<img src={require("../image/carousel_1.jpg").default} alt={`carousel ${i + 1}`} key={i}/>)
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
