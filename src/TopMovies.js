import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import IconStar from './assets/IconStar';

const Heading = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding-left: 16px;
  padding-bottom: 32px;
`;

const Subtle = styled.span`
  color: rgb(187, 186, 186);
`;

const Movie = styled.div`
  padding: 16px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
    background-color: white;
  }
`;

const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);

  ${Movie}:hover & {
    box-shadow: unset;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  max-width: 75%;
`;

const Vote = styled.span`
  color: var(--blue);
  font-weight: bold;
  display: flex;
  align-items: start;
  padding-top: 4px;
`;

const Average = styled.span`
  padding-left: 4px;
`;

const Genres = styled.div`
  color: rgb(99, 114, 125);
  font-size: 14px;
  padding-bottom: 16px;
`;

const DetailsLink = styled.a`
  text-decoration: none;
  border-radius: 4px;
  background-color: var(--blue);
  color: white;
  text-align: center;
  padding: 16px;

  display: none;

  ${Movie}:hover & {
    display: block;
  }
`;

const TopMovies = ({ movies }) => {
  return (
    <>
      <Heading>
        <Subtle>Movies:</Subtle> Top 5
      </Heading>
      <Grid>
        {movies.map(movie => (
          <Movie key={movie.id}>
            <Poster src={movie.posterPath} alt={movie.title} />
            <Description>
              <Title>{movie.title}</Title>
              <Vote>
                <IconStar />
                <Average>{movie.voteAverage}</Average>
              </Vote>
            </Description>
            <Genres>{movie.genres.join(', ')}</Genres>
            <Link to={`/movies/${movie.id}`} component={DetailsLink}>
              View Details
            </Link>
          </Movie>
        ))}
      </Grid>
    </>
  );
};

export default TopMovies;
