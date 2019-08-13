import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { compose } from 'ramda';
import { observer, useObservable, useObserver } from 'mobx-react-lite';
import { injectPick, withPaths } from '../utils/store';

import Key from './Key';
import Axes from './Axes';
import Points from './Points';
import Table from './table';
import Loading from './Loading';
import { media } from '../utils/media';

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
    max-width: 960px;
    ${media.phablet`width: 90%;`}
    ${media.phone`width: 90%;`}
    border-radius: 5px;
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
    box-sizing: border-box;
    background: white;
    margin: 0 auto;
    > div {
      position: relative;
    }
  }
`;

const Credit = styled.div`
  padding: 20px;
  text-align: left;
  a {
    text-decoration: underline;
    color: hsl(205, 82%, 33%);
  }
  margin-bottom: 30px;
`;

const HeartrateChart = ({ data = [], chart }) => {
  const targetRef = useRef();
  useEffect(() => {
    chart.addAnimals(data.map(({ node }) => node));
    const { width } = targetRef.current.getBoundingClientRect();
    chart.setUpScales({ width });
  }, []);

  return (
    <>
      <Key
        animals={chart.animals.length !== 0 ? chart.animalsSorted() : []}
      ></Key>
      <ChartWrap>
        <div ref={targetRef}>
          <h2>Resting Heartrate vs Longevity of animal</h2>
          {chart.animals.length !== 0 ? (
            <div>
              <Axes
                yTicks={chart.heartAxis()}
                xTicks={chart.longevityAxis()}
                xLabel="Longevity (years)"
                yLabel="Resting heartrate (BPM)"
              ></Axes>
              <Points points={chart.longevityPoints()}></Points>
            </div>
          ) : (
            <Loading></Loading>
          )}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <h2>Resting Heartrate vs Weight of animal</h2>
          {chart.animals.length !== 0 ? (
            <div>
              <Axes
                yTicks={chart.heartAxis()}
                xTicks={chart.weightAxis()}
                xLabel="Weight (KG) (log scale) "
                yLabel="Resting heartrate (BPM) "
              ></Axes>
              <Points points={chart.weightPoints()}></Points>
            </div>
          ) : (
            <Loading></Loading>
          )}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <h2>Longevity vs Weight of animal</h2>
          {chart.animals.length !== 0 ? (
            <div>
              <Axes
                yTicks={chart.longevityYAxis()}
                xTicks={chart.weightAxis()}
                yLabel="Longevity (years) "
                xLabel="Weight (KG) (log scale) "
              ></Axes>
              <Points points={chart.longevityWeightPoints()}></Points>
            </div>
          ) : (
            <Loading></Loading>
          )}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <h2>Raw data</h2>
          {chart.animals.length && <Table></Table>}
        </div>
      </ChartWrap>
      <ChartWrap>
        <div>
          <Credit>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            and{' '}
            <a href="https://icons8.com/" title="Icons 8">
              Icons 8
            </a>
            {'. '}
            Licensed by{' '}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </Credit>
        </div>
      </ChartWrap>
    </>
  );
};

export default compose(
  withPaths(['chart']),
  observer
)(HeartrateChart);
