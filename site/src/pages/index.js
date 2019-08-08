import React from 'react';
import { Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import HeartrateChart from '../components/heartrateChart';

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
  console.log({ animalData });
  return (
    <Layout>
      <h1>Heartrates</h1>
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
