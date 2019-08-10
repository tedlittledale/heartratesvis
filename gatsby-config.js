require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
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
        name: `Heart rates`,
        short_name: `Heart rates`,
        start_url: `/`,
        background_color: `#003E6B`,
        theme_color: `#003E6B`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
