import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const FILTERS = [
  {
    title: 'Comedy',
    route: '/genres/comedy'
  },
  {
    title: 'Action',
    route: '/genres/action'
  },
  {
    title: 'Mystery',
    route: '/genres/mystery'
  },
  {
    title: 'True Crime',
    route: '/genres/true-crime'
  }
];

const Container = styled.div`
  background-color: rgb(244, 245, 251);
  padding-top: 52px;
  padding-right: 60px;
  padding-bottom: 80px;
  padding-left: 60px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 1rem;
`;

const Filter = styled.a`
  color: white;
  text-decoration: none;
  font-size: 32px;
  font-weight: 900;
  padding: 96px 0px;
  text-align: center;
  background: linear-gradient(
    -225deg,
    rgb(154, 76, 237) 0%,
    rgb(134, 127, 239) 46%,
    rgb(127, 199, 242) 100%
  );
`;

const Genres = ({ movies }) => (
  <Container>
    <Subtle>Browse</Subtle>
    <Heading>by Genre</Heading>
    <Grid>
      {FILTERS.map(({ title, route }) => (
        <Link key={title} to={route} component={Filter}>
          {title}
        </Link>
      ))}
    </Grid>
  </Container>
);

export default Genres;
