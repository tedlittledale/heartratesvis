import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import HeartrateChart from '../components/heartrateChart';
import { media } from '../utils/media';

const Header = styled('header')`
  background-image: linear-gradient(
    to bottom right,
    hsl(205, 76%, 39%),
    hsl(205, 74%, 65%)
  );
  text-align: center;
  padding: 30px 0 80px;
  color: #fff;
  overflow: visible;
  position: relative;
  h1 {
    font-weight: normal;
  }
  margin-bottom: 100px;
`;

const Info = styled('div')`
  min-height: 100px;

  position: absolute;
  ${media.phablet`position: relative`}
  ${media.phone`position: relative`}
  width: 100%;
  left: 0;
  bottom: -50px;
  > div {
    width: 80%;
    min-width: 300px;
    max-width: 960px;
    background: #fff;
    border: 2px solid hsl(43, 13%, 90%);
    border-radius: 5px;
    color: hsl(40, 13%, 23%);
    margin: 0 auto;
    display: grid;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 1.7;
    font-size: 18px;
  }
  a {
    text-decoration: underline;
    color: hsl(205, 82%, 33%);
  }
`;

const IndexPage = () => {
  const {
    allMongodbHeartratesHeartrates: { edges: animalData }
  } = useStaticQuery(graphql`
    query HeartrateQuery {
      allMongodbHeartratesHeartrates {
        edges {
          node {
            Creature
            Longevity__Years_
            Mass__grams_
            Resting_Heart_Rate__BPM_
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Header>
        <h1>Heart rates, masses, and longevity of select mammals</h1>
        <Info>
          <div>
            <p>
              A submission for the Reddit r/dataisbeautiful{' '}
              <a
                href="https://www.reddit.com/r/dataisbeautiful/comments/cmrz6j/battle_dataviz_battle_for_the_month_of_august/"
                _target="blank"
              >
                DataViz Battle for the month of August 2019
              </a>
              : <br />
              Visualize heart rates, masses, and longevity of select mammals
            </p>
          </div>
        </Info>
      </Header>
      <HeartrateChart data={animalData}></HeartrateChart>
      {/* <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
       */}
    </Layout>
  );
};

export default IndexPage;
