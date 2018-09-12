import graphql from 'graphql-tag';
import Helmet from 'react-helmet';
import React from 'react';
import renderHTML from 'react-render-html';
import VerticalNavigationList from '../components/VerticalNavigationList';

import { Content, Box } from 'bloomer';

export default ({
  data: { allMarkdownRemark, markdownRemark, site, siteSearchIndex },
}) => {
  return (
    <div className={'master-detail-container'}>
      <Helmet
        title={`${markdownRemark.frontmatter.title} - ${
          site.siteMetadata.title
        }`}
      />
      <div className={'master-pane'}>
        <VerticalNavigationList
          currentSlug={markdownRemark.fields.slug}
          edges={allMarkdownRemark.edges}
          searchData={siteSearchIndex}
        />
      </div>
      <br/>
      <Box>
        <Content>{renderHTML(markdownRemark.html)}</Content>
      </Box>
    </div>
  );
};

export const query = graphql`
  query DefaultTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
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
