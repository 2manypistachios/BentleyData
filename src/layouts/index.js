import graphql from 'graphql-tag';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import { Box, Container, Navbar, NavbarItem } from 'bloomer';

fontawesome.library.add(solid)

const Header = () => (
  <Navbar>
    <NavbarItem href='/'>
      Home
    </NavbarItem>
  </Navbar>
);

const TemplateWrapper = ({ children, data: { site } }) => (
  <Container>
    <Helmet
      title={site.siteMetadata.title}
      meta={[{ name: 'description', content: site.siteMetadata.description }]}
    />
    <Header />
    <Box>
     {children()}
    </Box>
  </Container>
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
