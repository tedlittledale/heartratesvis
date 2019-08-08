import React, { useEffect } from 'react';
import styled from 'styled-components';
import { compose } from 'ramda';
import { observer, useObservable, useObserver } from 'mobx-react-lite';
import { injectPick, withPaths } from '../utils/store';

import Key from './Key';
import Axes from './Axes';

const ChartWrap = styled('div')`
  width: 100%;
  height: 500px;
`;

const HeartrateChart = ({ data = [], chart }) => {
  console.log({ data, chart });
  useEffect(() => {
    chart.addAnimals(data.map(({ node }) => node));
    chart.setUpScales();
  }, []);
  return (
    <ChartWrap>
      <Key animals={data.map(({ node: { Creature } }) => Creature)}></Key>
      {chart.animals.length && (
        <>
          <Axes
            xTicks={chart.heartAxis()}
            yTicks={chart.longevityAxis()}
          ></Axes>
        </>
      )}
    </ChartWrap>
  );
};

export default compose(
  withPaths(['chart']),
  observer
)(HeartrateChart);
