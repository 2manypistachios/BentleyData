import graphql from 'graphql-tag';
import Helmet from 'react-helmet';
import React from 'react';
import VerticalNavigationList from '../components/VerticalNavigationList';

import { Title, Subtitle, Image, Columns, Column } from 'bloomer';
import logo from "./ceo-blue.jpg";

const App = ({ data: { allMarkdownRemark, site, siteSearchIndex } }) => (
  <div className={'master-detail-container'}>
    <Columns isVCentered>
      <Column>
        <Image isRatio="3:2"src={logo} />
      </Column>
      <Column>
        <Title>Search with your Interest Code</Title>
        <Subtitle>Note that this does not list every potential option. There are many more possibilities than Bentley can measure!</Subtitle>
      </Column>
    </Columns>
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
