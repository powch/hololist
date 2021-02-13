import React from "react";
import styled from 'styled-components';

const FilterContainer = styled.div({
  display: 'flex',
  minHeight: '2rem',
  width: '100%',
  borderRadius: '1rem',
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
  cursor: 'pointer'
});

const Filter = ({ active, handleClick, title }) => {
  return (
    <FilterContainer onClick={handleClick}>
      {title}
      {active ? '  *' : null}
    </FilterContainer>
  );
};

export default Filter;
