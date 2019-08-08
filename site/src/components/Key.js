import React from "react"
import styled from "styled-components"
import Img from "./img"

const KeyWrap = styled("div")`
  display: grid;
  grid: 1fr / repeat(16, 1fr);
`

const Item = styled("div")`
  display: grid;
  grid: 1fr 50px / 50px;
  color: red;
`

const animalMap = {
  Human: "chicken",
  Cat: "cat-butt",
  "Small dog": "pug",
  "Medium dog": "corgi",
  "Large dog": "german-shepherd",
  Hamster: "cute-hamster",
  Chicken: "chicken",
  Monkey: "chicken",
  Horse: "horse",
  Cow: "cow",
  Pig: "pig",
  Rabbit: "rabbit",
  Elephant: "elephant",
  Giraffe: "giraffe",
  "Large whale": "whale",
}

const Key = ({ animals = [] }) => {
  console.log(JSON.stringify(animals))
  return (
    <KeyWrap>
      {animals.map(name => (
        <Item>
          <span>{name}</span>
          <span>
            {/* <Img filename={`icons8-${animalMap[name]}-50.png`} alt={name} /> */}
          </span>
        </Item>
      ))}
    </KeyWrap>
  )
}

export default Key

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
