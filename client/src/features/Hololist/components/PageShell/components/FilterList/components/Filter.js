import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div({
  display: "flex",
  minHeight: "2rem",
  width: "100%",
  borderRadius: "1rem",
  backgroundColor: "slategrey",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "1rem",
  cursor: "pointer",
});

const DropdownButton = styled.button({
  borderTopLeftRadius: "1rem",
  borderBottomLeftRadius: "1rem",
  minHeight: "2rem",
  borderRight: "1px solid white",
  backgroundColor: "slategray",
  padding: ".25rem .75rem",
  cursor: "pointer",
});

const TitleContainer = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

const IconContainer = styled.div({
  padding: "0 1rem 0 0",
  marginLeft: "-2rem",
});

const Filter = ({
  active,
  handleClick,
  title,
  isParent,
  dropdownClick,
  dropdownActive,
}) => {
  return (
    <FilterContainer>
      {isParent ? (
        <DropdownButton onClick={dropdownClick}>
          {dropdownActive ? "▲" : "▼"}
        </DropdownButton>
      ) : null}
      <TitleContainer onClick={handleClick}>{title}</TitleContainer>
      {active ? <IconContainer>✔</IconContainer> : null}
    </FilterContainer>
  );
};

export default Filter;
