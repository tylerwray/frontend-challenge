import React from 'react';
import styled from 'styled-components/macro';
import { useRouteMatch } from 'react-router-dom';
import IconStar from './assets/IconStar';
import { useMovie } from './graphql';
import Breadcrumb from './Breadcrumb';
import Cast from './Cast';

const MovieDetails = () => {
  const { params } = useRouteMatch();
  const { data, loading } = useMovie(params.movieId);

  // TODO: Add a nice loading state
  if (loading) return null;

  const {
    cast,
    director,
    genres,
    overview,
    posterPath,
    releaseDate,
    title,
    voteAverage
  } = data;

  const year = new Date(releaseDate).getFullYear();

  return (
    <Container>
      <Breadcrumb />
      <Details>
        <Portait src={posterPath} alt={title} />
        <Description>
          <Vote>
            <IconStar width={24} height={24} />
            <Average>{voteAverage}</Average> <Total>/10</Total>
          </Vote>
          <Title>
            {title} <Year>({year})</Year>
          </Title>
          <Genres>{genres.join(', ')}</Genres>
          <Director>Director: {director.name}</Director>
          <Overview>{overview}</Overview>
        </Description>
      </Details>
      <Cast cast={cast} />
    </Container>
  );
};

const Container = styled.div`
  padding: 56px 64px;
`;

const Portait = styled.img`
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
`;

const Details = styled.div`
  padding-top: 24px;
  padding-bottom: 60px;
  display: flex;
`;

const Vote = styled.span`
  color: var(--blue);
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: start;
  padding-top: 4px;
  padding-bottom: 24px;
`;

const Average = styled.span`
  padding-left: 4px;
`;

const Total = styled.span`
  color: var(--light-gray);
  font-size: 16px;
  text-align: bottom;
  padding-left: 4px;
  padding-top: 6px;
`;

const Description = styled.div`
  padding-left: 32px;
  padding-top: 32px;
`;

const Title = styled.div`
  font-size: 56px;
  font-weight: bold;
  padding-bottom: 8px;
`;

const Year = styled.span`
  color: var(--light-gray);
  font-weight: normal;
`;

const Genres = styled.div`
  font-size: 24px;
  color: var(--gray);
  padding-bottom: 60px;
`;

const Director = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 16px;
`;

const Overview = styled.div`
  font-size: 20px;
  color: var(--gray);
`;

export default MovieDetails;
