import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

/**
 * NOTE: Due to limitations with JSON-server,
 * this query does not fully reflect each field and
 * associated type, but will return the full set of data
 * regardless.
 **/
const MOVIE_QUERY = gql`
  query Movie($id: ID!) {
    Movie(id: $id) {
      id
      originalLanguage
      originalTitle
      overview
      popularity
      posterPath
      releaseDate
      title
      voteAverage
      voteCount
      budget
      runtime
      genres
      cast
      director
    }
  }
`;

const useMovie = id => {
  const { data, loading, error } = useQuery(MOVIE_QUERY, { variables: { id } });

  const result = data?.Movie ?? {};

  return {
    data: result,
    error,
    loading
  };
};

export default useMovie;
