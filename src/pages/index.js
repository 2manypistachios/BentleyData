import graphql from 'graphql-tag';
import Helmet from 'react-helmet';
import React from 'react';
import VerticalNavigationList from '../components/VerticalNavigationList';

import { Title, Subtitle } from 'bloomer';

const App = ({ data: { allMarkdownRemark, site, siteSearchIndex } }) => (
  <div className={'master-detail-container'}>
    <Helmet title={`Home Hi - ${site.siteMetadata.title}`} />
    
    <Title>Bentley Job Data</Title>
    <Subtitle>Search with your Interest Code</Subtitle>
    
    <div className={'master-pane'}>
      <VerticalNavigationList
        currentSlug={'/'}
        edges={allMarkdownRemark.edges}
        searchData={siteSearchIndex}
      />
    </div>
  </div>
);
export default App;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    siteSearchIndex {
      index
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          headings {
            depth
            value
          }
        }
      }
    }
  }
`;
