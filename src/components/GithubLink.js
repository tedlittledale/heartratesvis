import React from 'react';
import styled from 'styled-components';
import Img from './img';
import { media } from '../utils/media';

const Wrap = styled.div`
  height: 50px;
  position: absolute;
  right: -40px;
  top: 30px;
  transform: rotate(45deg);
  background: white;
  height: 20px;
  padding: 5px 40px;
  ${media.phablet`display:none;`}
  ${media.phone`display:none;`}
  z-index: 10000;
  a {
    display: grid;
    grid: 20px / 20px 1fr;
    align-items: center;
    grid-gap: 10px;
    color: hsl(205, 82%, 33%);
  }
`;

const GithubLink = () => {
  return (
    <Wrap>
      <a
        href="https://github.com/tedlittledale/heartratesvis"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Img filename={`GitHub-Mark-32px.png`} alt={`github logo`} />
        <span>Fork me</span>
      </a>
    </Wrap>
  );
};

export default GithubLink;
