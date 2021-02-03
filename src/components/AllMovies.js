import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { useAllMovies } from 'hooks/graphql';
import chevron from 'assets/Chevron.png';

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

const AllMovies = ({ genre = 'all', header }) => {
  const [sortField, setSortField] = useState(SORT_OPTIONS[0].value);

  const handleSortFieldChange = event => setSortField(event.target.value);

  const genreFilters = {
    comedy: ['Comedy'],
    action: ['Action'],
    mystery: ['Mystery'],
    crime: ['Crime'],
    all: []
  };

  const { data: movies } = useAllMovies({
    filter: { genres: genreFilters[genre] },
    sortField
  });

  return (
    <Container>
      <Toolbar>
        <Header>{header}</Header>
        <Sort>
          <Label htmlFor="all-movie-sort">Sort by</Label>
          <Select
            id="all-movie-sort"
            value={sortField}
            onChange={handleSortFieldChange}
          >
            {SORT_OPTIONS.map(({ title, value }) => (
              <option value={value} key={value}>
                {title}
              </option>
            ))}
          </Select>
        </Sort>
      </Toolbar>
      <Grid>
        {movies.map(movie => (
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

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Header = styled.div`
  padding-bottom: 32px;
`;

const Sort = styled.div`
  padding-bottom: 32px;
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
