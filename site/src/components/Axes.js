import React from 'react';
import styled from 'styled-components';
import Img from './img';

const AxesWrap = styled('div')`
  display: grid;
  grid: 1fr / 1fr;
  justify-items: center;
  position: relative;
  height: 500px;

  line {
    stroke: #d8d8d8;
  }
`;

const YAxis = styled.svg`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  /* display: grid;
  grid: repeat(10, 1fr) / 1fr; */
  text {
    fill: #8c9296;
    font-size: 10px;
    user-select: none;
  }
`;

const XAxis = styled.svg`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  /* display: grid;
  grid: repeat(10, 1fr) / 1fr; */
  text {
    fill: #8c9296;
    font-size: 10px;
    user-select: none;
  }
`;

const Axes = ({ yTicks, xTicks, yScale }) => {
  return (
    <AxesWrap>
      <YAxis>
        {yTicks.map(({ label, y }, i) => (
          <g key={i}>
            <line x1={0} x2={20} y1={y} y2={y} />
            <text x={0} y={y + 11}>
              {label}
            </text>
          </g>
        ))}
        }
      </YAxis>
      <XAxis>
        {xTicks.map(({ label, x }, i) => (
          <g key={i}>
            <text x={x} textAnchor="middle" y={500 - 20 + 15}>
              {label}
            </text>
          </g>
        ))}
      </XAxis>
    </AxesWrap>
  );
};

export default Axes;
