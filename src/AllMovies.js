import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import chevron from './assets/Chevron.png';

const SORT_OPTIONS = [
  {
    title: 'Popularity',
    value: 'popularity'
  },
  {
    title: 'Release Date',
    value: 'releaseDate'
  },
  {
    title: 'Title',
    value: 'title'
  },
  {
    title: 'Runtime',
    value: 'runtime'
  },
  {
    title: 'Budget',
    value: 'budget'
  }
];

const byNumber = property => (movieOne, movieTwo) =>
  movieTwo[property] - movieOne[property];

const byDate = property => (movieOne, movieTwo) =>
  new Date(movieTwo[property]) - new Date(movieOne[property]);

const byString = property => (movieOne, movieTwo) => {
  if (movieOne[property] < movieTwo[property]) return -1;
  if (movieOne[property] > movieTwo[property]) return 1;
  return 0;
};

const SORTERS = {
  popularity: byNumber('popularity'),
  releaseDate: byDate('releaseDate'),
  title: byString('title'),
  runtime: byNumber('title'),
  budget: byNumber('budget')
};

const AllMovies = ({ movies }) => {
  const [sortProperty, setSortProperty] = useState(SORT_OPTIONS[0].value);

  const handleSortPropertyChange = event => setSortProperty(event.target.value);

  const sortedMovies = [...movies].sort(SORTERS[sortProperty]);

  return (
    <Container>
      <Header>
        <div>
          <Subtle>Movies</Subtle>
          <Heading>Browse All</Heading>
        </div>
        <Sort>
          <Label htmlFor="all-movie-sort">Sort by</Label>
          <Select
            id="all-movie-sort"
            value={sortProperty}
            onChange={handleSortPropertyChange}
          >
            {SORT_OPTIONS.map(({ title, value }) => (
              <option value={value} key={value}>
                {title}
              </option>
            ))}
          </Select>
        </Sort>
      </Header>
      <Grid>
        {sortedMovies.map(movie => (
          <Link to={`/movies/${movie.id}?from=all_movies`} key={movie.id}>
            <Poster src={movie.posterPath} alt={movie.title} />
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 56px 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Subtle = styled.span`
  color: var(--light-gray);
  font-size: 24px;
  font-weight: bold;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 48px;
  padding-bottom: 24px;
`;

const Sort = styled.div`
  padding: 32px 0;
`;

const Label = styled.label`
  font-size: 14px;
  padding: 16px;
  color: rgb(143, 154, 162);
`;

const Select = styled.select`
  padding: 12px 0;
  padding-left: 16px;
  padding-right: 48px;
  border-radius: 4px;
  border: 1px solid rgb(228, 228, 228);
  color: rgb(51, 51, 51);
  font-size: 14px;
  appearance: none;
  background-image: url(${chevron});
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACKADAAQAAAABAAAABQAAAABtFL/jAAAAUklEQVQIHWNIKa41ZsAB0ssaTJgYGRmNUkrq/NHVgMT+/ftnCBZPLalLRVYEYoPEQJKMMJ0ggf8MDK+ggmKze5pmw+TgdGpxXWxKSUMMXADIAAAtFxnvhaL4LgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 105px;

  &::-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 1rem;
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  transition: box-shadow 300ms ease;

  &:hover {
    box-shadow: none;
  }
`;

export default AllMovies;
