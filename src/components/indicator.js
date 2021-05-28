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
    height: 15px;
    width: 15px;
    margin: 0 5px 0;
    background-color: rgba(95, 95, 95, 0.64);
    border-radius: 50%;
    display: inline-block;
  }

  & .dot.dot--active {
    background-color: rgba(95, 95, 95, 0.82);
  }
`

const Indicator = ({numImages, currentImageIndex}) => {
  return (
      <IndicatorWrapper>
        {[...Array(numImages).keys()].map((i) => {
          console.log(i);
          console.log(currentImageIndex);
          return (
          <span key={i} className={`dot ${i === currentImageIndex && "dot--active"}`}/>)
        })}
      </IndicatorWrapper>)

}

export default Indicator
