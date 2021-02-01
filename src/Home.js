import { useFetchAllMovies } from './rest';
import AllMovies from './AllMovies';
import Genres from './Genres';
import TopMovies from './TopMovies';

const Home = () => {
  const { data, loading } = useFetchAllMovies();

  // TODO: Add a nice loading state
  if (loading) return null;

  console.log(data[0]);

  return (
    <>
      <TopMovies movies={data} />
      <Genres />
      <AllMovies movies={data} />
    </>
  );
};

export default Home;
