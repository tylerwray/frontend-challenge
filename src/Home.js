import React from 'react';
import styled from 'styled-components/macro';
import { useAllMovies } from './graphql';
import AllMovies from './AllMovies';
import GenrePicker from './GenrePicker';
import TopMovies from './TopMovies';

const Home = () => {
  const { data, loading } = useAllMovies();

  // TODO: Add a nice loading state
  if (loading) return null;

  return (
    <>
      <TopMovies movies={data} />
      <GenrePicker />
      <AllMovies
        movies={data}
        header={
          <div>
            <Subtle>Movies</Subtle>
            <Heading>Browse All</Heading>
          </div>
        }
      />
    </>
  );
};

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
