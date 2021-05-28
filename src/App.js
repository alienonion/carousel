import React from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;
export default function App() {



  // useEffect(() => {
  //   const handleAutoplay = setInterval(handleClickNext, 3000);
  //   return () => clearInterval(handleAutoplay);
  // }, [handleClickNext]);
  const images = [ './image/carousel_1.jpg', './image/carousel_1.jpg', './image/carousel_1.jpg' ];

  return (
      <Wrapper className="App">
        <Carousel
            images={images}
            // handleClickPrev={handleClickPrev}
            // handleClicknext={handleClickNext}
        />
      </Wrapper>
  );
}
