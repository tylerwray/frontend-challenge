import styled from 'styled-components/macro';
import { useFetchAllMovies } from './rest';
import TopMovies from './TopMovies';

const Container = styled.div`
  padding: 48px 80px;
`;

const Home = () => {
  const { data, loading } = useFetchAllMovies();

  // TODO: Add a nice loading state
  if (loading) return null;

  const topMovies = data.sort(byRating).slice(0, 5);

  return (
    <Container>
      <TopMovies movies={topMovies} />
    </Container>
  );
};

/*
 * Sort movies by their "rating".
 *
 * Rating is determined by the popularity value of each movie.
 */
const byRating = (movieOne, movieTwo) =>
  movieOne.popularity < movieTwo.popularity;

export default Home;
