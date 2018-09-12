import graphql from 'graphql-tag';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import './index.css';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import 'bulma/css/bulma.css'

fontawesome.library.add(solid)

const Header = () => (
  <div className="top-header">
    <div className="header-text">
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </div>
  </div>
);

const TemplateWrapper = ({ children, data: { site } }) => (
  <div>
    <Helmet
      title={site.siteMetadata.title}
      meta={[{ name: 'description', content: site.siteMetadata.description }]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
