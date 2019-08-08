import React from "react"
import styled from "styled-components"

import Key from "./Key"

const ChartWrap = styled("div")`
  color: red;
`

const HeartrateChart = ({ data = [] }) => {
  console.log({ data })
  return (
    <ChartWrap>
      <Key animals={data.map(({ node: { Creature } }) => Creature)}></Key>
    </ChartWrap>
  )
}

export default HeartrateChart
