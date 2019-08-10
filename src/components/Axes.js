import React from 'react';
import styled from 'styled-components';
import Img from './img';

const AxesWrap = styled('div')`
  display: grid;
  grid: 1fr / 1fr;
  justify-items: center;
  position: relative;
  height: 520px;
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
    font-size: 12px;
    user-select: none;
  }
  > text {
    font-size: 14px;
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
    font-size: 12px;
    user-select: none;
  }
  > text {
    font-size: 14px;
  }
`;

const Axes = ({ yTicks, xTicks, yLabel, xLabel }) => {
  return (
    <AxesWrap>
      <YAxis>
        <text
          x={-250}
          y={5}
          transform="rotate(-90)"
          textAnchor="middle"
          dy="1em"
        >
          {yLabel}
        </text>
        {yTicks.map(({ label, y }, i) => (
          <g key={i}>
            <line x1={30} x2="95%" y1={y} y2={y} />
            <text x={30} y={y + 11}>
              {label}
            </text>
          </g>
        ))}
        }
      </YAxis>
      <XAxis>
        <text x="50%" y={470} textAnchor="middle" dy="1em">
          {xLabel}
        </text>
        {xTicks.map(({ label, x }, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={440} y2={450} />
            <text x={x} textAnchor="middle" y={465}>
              {label}
            </text>
          </g>
        ))}
      </XAxis>
    </AxesWrap>
  );
};

export default Axes;
