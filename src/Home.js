import React from 'react';
import { useAllMovies } from './graphql';
import AllMovies from './AllMovies';
import Genres from './Genres';
import TopMovies from './TopMovies';

const Home = () => {
  const { data, loading } = useAllMovies();

  // TODO: Add a nice loading state
  if (loading) return null;

  return (
    <>
      <TopMovies movies={data} />
      <Genres />
      <AllMovies movies={data} />
    </>
  );
};

export default Home;
