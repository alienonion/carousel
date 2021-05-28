import React from 'react';
import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  display: flex;

  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  right: 50%;
  bottom: 5%;
  transform: translateX(50%);


  & .dot {
    height: 10px;
    width: 10px;
    margin: 0 2px 0;
    background-color: rgba(95, 95, 95, 0.64);
    border-radius: 50%;
    display: inline-block;
  }

  & .dot.dot--active {
    background-color: rgba(95, 95, 95, 0.82);
  }
`


const Indicator = ({numImages, currentImageIndex, changeSlideHandler}) => {
  return (
      <IndicatorWrapper>
        {[...Array(numImages).keys()].map((key) => {
          return (
          <span key={key} onClick={() => changeSlideHandler(key)} className={`dot ${key === currentImageIndex && "dot--active"}`}/>)
        })}
      </IndicatorWrapper>)

}

export default Indicator
