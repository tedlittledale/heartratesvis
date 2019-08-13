import React from 'react';
import styled from 'styled-components';
import Img from './img';
import { media } from '../utils/media';

import Loading from './Loading';

const KeyWrap = styled('div')`
  display: grid;
  justify-items: center;
  align-items: center;
  h2 {
    background-image: linear-gradient(
      to bottom right,
      hsl(205, 87%, 29%),
      hsl(205, 76%, 39%)
    );
    margin: 0 0 10px;
    padding: 20px 40px;
    border-radius: 5px 5px 0 0;
    color: #fff;
    font-weight: normal;
    letter-spacing: 0.8px;
  }
  > div {
    width: 80%;
    max-width: 960px;
    ${media.phablet`width: 90%;`}
    ${media.phone`width: 90%;`}
    border-radius: 5px;
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
    box-sizing: border-box;
    background: white;
  }
`;

const Items = styled('div')`
  display: grid;
  grid: 1fr 1fr 1fr / repeat(5, 1fr);
  grid-auto-flow: column;
  grid-gap: 15px 0;
  padding-bottom: 20px;
  text-align: center;
  ${media.phablet`font-size:14px;`}
  ${media.phone`font-size:14px;`}
`;

const Item = styled('div')`
  display: grid;
  grid: 1fr 30px / 1fr;
  justify-items: center;
  .gatsby-image-wrapper {
    width: 30px;
    height: 30px;
  }
`;

const animalMap = {
  Human: 'human2',
  Cat: 'cat-butt',
  'Small dog': 'pug',
  'Medium dog': 'corgi',
  'Large dog': 'german-shepherd',
  Hamster: 'cute-hamster',
  Chicken: 'chicken',
  Monkey: 'monkey',
  Horse: 'horse',
  Cow: 'cow',
  Pig: 'pig',
  Rabbit: 'rabbit',
  Elephant: 'elephant',
  Giraffe: 'giraffe',
  'Large whale': 'whale'
};

const Key = ({ animals = [] }) => {
  return (
    <KeyWrap>
      <div>
        <h2>Key</h2>
        {animals.length ? (
          <Items>
            {animals.map((name, idx) => (
              <Item key={idx}>
                <span>{name}</span>
                <span>
                  <Img
                    filename={`icons8-${animalMap[name]}-50.png`}
                    alt={name}
                  />
                </span>
              </Item>
            ))}
          </Items>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </KeyWrap>
  );
};

export default Key;

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
