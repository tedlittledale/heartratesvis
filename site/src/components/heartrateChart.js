import React, { useEffect } from 'react';
import styled from 'styled-components';
import { compose } from 'ramda';
import { observer, useObservable, useObserver } from 'mobx-react-lite';
import { injectPick, withPaths } from '../utils/store';

import Key from './Key';
import Axes from './Axes';
import Points from './Points';

const ChartWrap = styled('div')`
  width: 100%;
  height: 600px;
  position: relative;
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
        {chart.animals.length && (
          <>
            <Axes
              yTicks={chart.heartAxis()}
              xTicks={chart.longevityAxis()}
            ></Axes>
            <Points points={chart.longevityPoints()}></Points>
          </>
        )}
      </ChartWrap>
    </>
  );
};

export default compose(
  withPaths(['chart']),
  observer
)(HeartrateChart);
