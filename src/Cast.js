import React from 'react';
import styled from 'styled-components/macro';

const Cast = ({ cast }) => {
  return (
    <>
      <Headline>Cast</Headline>
      <Grid>
        {cast.map(member => (
          <div key={member.order}>
            <Portait src={member.profilePath} alt={member.name} />
            <Name>{member.name}</Name>
            <Character>{member.character}</Character>
          </div>
        ))}
      </Grid>
    </>
  );
};

const Headline = styled.div`
  font-size: 32px;
  font-weight: normal;
  padding-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 24px;
`;

const Portait = styled.img`
  border-radius: 4px;
  width: 100%;
  padding-bottom: 16px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 6px;
`;

const Character = styled.div`
  color: var(--light-gray);
`;

export default Cast;
