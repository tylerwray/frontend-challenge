import { useFetchAllMovies } from './rest';
import Genres from './Genres';
import TopMovies from './TopMovies';

const Home = () => {
  const { data, loading } = useFetchAllMovies();

  // TODO: Add a nice loading state
  if (loading) return null;

  const topMovies = data.sort(byRating).slice(0, 5);

  return (
    <>
      <TopMovies movies={topMovies} />
      <Genres movies={data} />
    </>
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
