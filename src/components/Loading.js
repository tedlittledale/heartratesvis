import React from 'react';
import styled, { keyframes } from 'styled-components';

const skStretchdelay = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
`;

const Wrap = styled.div`
  width: 100;
  height: 100%;
  display: grid;
  grid: 1fr / 1fr;
  align-items: center;
  justify-items: center;
  > div {
    width: 50px;
    height: 80px;
    margin: 30px 0;
    display: grid;
    grid: 1fr / repeat(5, 6px);
    grid-gap: 4px;
    > div {
      background-color: hsl(205, 87%, 29%);
      height: 100%;
      width: 6px;
      animation: ${skStretchdelay} 1.2s infinite ease-in-out;
    }

    > .rect2 {
      animation-delay: -1.1s;
    }

    > .rect3 {
      animation-delay: -1s;
    }

    > .rect4 {
      animation-delay: -0.9s;
    }

    > .rect5 {
      animation-delay: -0.8s;
    }
  }
`;

const Loading = () => {
  return (
    <Wrap>
      <div>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </Wrap>
  );
};

export default Loading;
