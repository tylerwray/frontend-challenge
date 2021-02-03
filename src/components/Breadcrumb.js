import React from 'react';
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import IconBackArrow from 'assets/IconBackArrow';

const crumbs = {
  action: 'Action',
  all_movies: 'All',
  comedy: 'Comedy',
  crime: 'True Crime',
  mystery: 'Mystery',
  top_movies: 'Top 5'
};

const Breadcrumb = () => {
  const { search } = useLocation();

  const { from } = queryString.parse(search);

  return (
    <Link to="/" component={Crumb}>
      <IconBackArrow />
      <Subtle>Movies:</Subtle> {crumbs[from]}
    </Link>
  );
};

const Crumb = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const Subtle = styled.span`
  padding-left: 16px;
  color: var(--light-gray);
`;

export default Breadcrumb;
