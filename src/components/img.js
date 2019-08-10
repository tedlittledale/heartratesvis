import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const Image = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 50) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }
      const imageSizes = image.node.childImageSharp.sizes;
      return <Img alt={alt} sizes={imageSizes} />;
    }}
  />
);

export default Image;
