import React from 'react';
import styled from 'styled-components/macro';

import { AllMovies } from 'components';

import GenrePicker from './GenrePicker';
import TopMovies from './TopMovies';

const Home = () => (
  <>
    <TopMovies />
    <GenrePicker />
    <AllMovies
      header={
        <div>
          <Subtle>Movies</Subtle>
          <Heading>Browse All</Heading>
        </div>
      }
    />
  </>
);

const Subtle = styled.span`
  color: var(--light-gray);
  font-size: 24px;
  font-weight: bold;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 48px;
`;

export default Home;
