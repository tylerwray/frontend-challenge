import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { useAllMovies } from 'hooks/graphql';
import IconStar from 'assets/IconStar';

const TopMovies = () => {
  // Sort top movies by the 'popularity' field
  const { data: movies } = useAllMovies({ sortField: 'popularity' });

  const topMovies = movies.slice(0, 5);

  return (
    <Container>
      <Heading>
        <Subtle>Movies:</Subtle> Top 5
      </Heading>
      <Grid>
        {topMovies.map(movie => (
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
            <Link
              to={`/movies/${movie.id}?from=top_movies`}
              component={DetailsLink}
            >
              View Details
            </Link>
          </Movie>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 48px 52px;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding-left: 16px;
  padding-bottom: 32px;
`;

const Subtle = styled.span`
  color: var(--light-gray);
`;

const Movie = styled.div`
  padding: 16px;
  border-radius: 4px;
  box-shadow: none;
  transition: box-shadow 300ms ease;

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
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  transition: box-shadow 300ms ease;

  ${Movie}:hover & {
    box-shadow: none;
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
  display: block;
  transition: opacity 300ms ease;

  opacity: 0;

  ${Movie}:hover & {
    opacity: 1;
  }
`;

export default TopMovies;
