import React from 'react';
import styled from 'styled-components';
import Img from './img';

const AxesWrap = styled('div')`
  display: grid;
  grid: 1fr / 1fr;
  justify-items: center;
  position: relative;
  height: 500px;
`;

const XAxis = styled.div`
  display: grid;
  position: absolute;
  width: 50px;
  height: 100%;
  left: 0;
  top: 0;
  display: grid;
  grid: repeat(10, 1fr) / 1fr;
`;

const Axes = ({ yTicks, xTicks }) => {
  return (
    <AxesWrap>
      <XAxis>
        {yTicks.map(val => (
          <span>{val}</span>
        ))}
      </XAxis>
    </AxesWrap>
  );
};

export default Axes;

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 50) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "one.jpg" }) {
//       ...fluidImage
//     }
//     imageTwo: file(relativePath: { eq: "two.jpg" }) {
//       ...fluidImage
//     }
//     imageThree: file(relativePath: { eq: "three.jpg" }) {
//       ...fluidImage
//     }
//   }
// `
