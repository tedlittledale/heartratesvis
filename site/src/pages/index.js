import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import HeartrateChart from "../components/heartrateChart"

const IndexPage = () => {
  const {
    allMongodbHeartratesHeartrates: { edges: animalData },
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
  `)
  console.log({ animalData })
  return (
    <Layout>
      <h1>Heartrates</h1>
      <HeartrateChart data={animalData}></HeartrateChart>
    </Layout>
  )
}

export default IndexPage
