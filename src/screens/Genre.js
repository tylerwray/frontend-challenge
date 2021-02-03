import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { AllMovies, Breadcrumb } from 'components';

const Genre = () => {
  const { params } = useRouteMatch();

  return <AllMovies genre={params.genre} header={<Breadcrumb />} />;
};

export default Genre;
