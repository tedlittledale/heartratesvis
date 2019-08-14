require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    title: `Heartrates`,
    description: `A submission for the Reddit r/dataisbeautiful DataViz Battle for the month of August 2019: Visualize heart rates, masses, and longevity of select mammals`,
    author: `@_superted`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-mongodb`,
      // options: {
      //   collection: 'heartrates',
      //   connectionString:
      //     'mongodb+srv://readonly:VCwzSECm2dj6c4gg@cluster0-shard-00-00-ucmfw.mongodb.net/Heartrates?retryWrites=true&w=majority',
      //   extraParams: {
      //     replicaSet: 'cluster0-shard-00',
      //     ssl: true,
      //     authSource: 'admin'
      //   },
      //   clientOptions: { useNewUrlParser: true }
      // }
      options: {
        dbName: `Heartrates`,
        collection: [`heartrates`],
        server: {
          address: 'cluster0-shard-00-00-ucmfw.mongodb.net',
          port: 27017
        },
        auth: {
          user: process.env.MONGO_ATLAS_USERNAME,
          password: process.env.MONGO_ATLAS_PASSWORD
        },
        extraParams: {
          replicaSet: 'Cluster0-shard-0',
          ssl: true,
          authSource: `admin`,
          retryWrites: true
        }
      }
      //
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heartrates`,
        short_name: `Heartrates`,
        start_url: `/`,
        background_color: `#1870AF`,
        theme_color: `#1870AF`,
        display: `minimal-ui`,
        icon: `src/images/animals/icons8-cute-hamster-50.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
