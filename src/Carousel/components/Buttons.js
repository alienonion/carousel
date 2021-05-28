import React, {Fragment} from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;

// const clicked = () => console.log('clicked')

function Buttons({handleClickPrev, handleClickNext}) {
  return (
      <Fragment>
        <ButtonWrapper side="prev"><IconButton  color="default" aria-label="previous image"
                                   onClick={handleClickPrev}><ArrowBackIosIcon/>
        </IconButton>
        </ButtonWrapper>
        <ButtonWrapper side="next"><IconButton  color="default" aria-label="next image"
                                   onClick={handleClickNext}><ArrowForwardIosIcon/>
        </IconButton>
        </ButtonWrapper>
      </Fragment>

  );
}

export default Buttons;
