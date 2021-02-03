import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

/**
 * NOTE: Due to limitations with JSON-server,
 * this query does not fully reflect each field and
 * associated type, but will return the full set of data
 * regardless.
 **/
const ALL_MOVIES_QUERY = gql`
  query AllMovies($filter: MovieFilter, $sortField: String) {
    allMovies(filter: $filter, sortField: $sortField, sortOrder: "desc") {
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

const useAllMovies = variables => {
  const { data, loading, error } = useQuery(ALL_MOVIES_QUERY, { variables });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
};

export default useAllMovies;
