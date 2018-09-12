import graphql from 'graphql-tag';
import Helmet from 'react-helmet';
import React from 'react';
import VerticalNavigationList from '../components/VerticalNavigationList';

const App = ({ data: { allMarkdownRemark, site, siteSearchIndex } }) => (
  <div className={'master-detail-container'}>
    <Helmet title={`Home Hi - ${site.siteMetadata.title}`} />
    <div className={'master-pane'}>
      <VerticalNavigationList
        currentSlug={'/'}
        edges={allMarkdownRemark.edges}
        searchData={siteSearchIndex}
      />
    </div>
    <div className={'detail-pane'}>
      <h1>Demo Site</h1>
      <p>
        Begin by searching for either a job title, by interest code, or by company.
      </p>
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
