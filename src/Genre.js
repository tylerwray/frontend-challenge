import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AllMovies from './AllMovies';
import Breadcrumb from './Breadcrumb';

const Genre = () => {
  const { params } = useRouteMatch();

  return <AllMovies genre={params.genre} header={<Breadcrumb />} />;
};

export default Genre;
