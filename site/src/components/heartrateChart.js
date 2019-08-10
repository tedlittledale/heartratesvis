import React, { useEffect } from 'react';
import styled from 'styled-components';
import { compose } from 'ramda';
import { observer, useObservable, useObserver } from 'mobx-react-lite';
import { injectPick, withPaths } from '../utils/store';

import Key from './Key';
import Axes from './Axes';
import Points from './Points';
import Table from './table';

const ChartWrap = styled('div')`
  margin-top: 50px;
  width: 100%;
  position: relative;
  text-align: center;
  h2 {
    background-image: linear-gradient(
      to bottom right,
      hsl(205, 87%, 29%),
      hsl(205, 76%, 39%)
    );
    margin: 0 0 10px;
    padding: 20px 40px;
    border-radius: 5px 5px 0 0;
    text-align: left;
    color: #fff;
    font-weight: normal;
    letter-spacing: 0.8px;
  }
  > div {
    width: 80%;
    min-width: 300px;
    max-width: 960px;
    border-radius: 5px;
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
    box-sizing: border-box;
    background: white;
    margin: 0 auto;
    > div {
      min-height: 550px;
      position: relative;
    }
  }
`;

const HeartrateChart = ({ data = [], chart }) => {
  console.log({ data, chart });
  useEffect(() => {
    chart.addAnimals(data.map(({ node }) => node));
    chart.setUpScales();
  }, []);
  return (
    <>
      <Key animals={data.map(({ node: { Creature } }) => Creature)}></Key>
      <ChartWrap>
        <div>
          <h2>Resting Heartrate vs Longevity of animal</h2>
          {chart.animals.length && (
            <div>
              <Axes
                yTicks={chart.heartAxis()}
                xTicks={chart.longevityAxis()}
                xLabel="Longevity (years)"
                yLabel="Resting heartrate (BPM)"
              ></Axes>
              <Points points={chart.longevityPoints()}></Points>
            </div>
          )}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <h2>Resting Heartrate vs Weight of animal</h2>
          {chart.animals.length && (
            <div>
              <Axes
                yTicks={chart.heartAxis()}
                xTicks={chart.weightAxis()}
                xLabel="Weight (KG) "
                yLabel="Resting heartrate (BPM) "
              ></Axes>
              <Points points={chart.weightPoints()}></Points>
            </div>
          )}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <h2>Longevity vs Weight of animal</h2>
          {chart.animals.length && (
            <div>
              <Axes
                yTicks={chart.longevityYAxis()}
                xTicks={chart.weightAxis()}
                yLabel="Longevity (years) "
                xLabel="Weight (KG) "
              ></Axes>
              <Points points={chart.longevityWeightPoints()}></Points>
            </div>
          )}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <h2>Raw data</h2>
          {chart.animals.length && <Table></Table>}
        </div>
      </ChartWrap>
    </>
  );
};

export default compose(
  withPaths(['chart']),
  observer
)(HeartrateChart);
