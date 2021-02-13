import React from "react";
import styled from "styled-components";

import FilterList from "./components/FilterList";

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
});

const FilterContainer = styled.div({
  height: "100vh",
  minWidth: "15rem",
  maxWidth: "15rem",
  backgroundColor: "#E5E5E5",
  padding: "1.5rem",
});

const ContentContainer = styled.div({
  height: "100%",
  width: "75rem",
  padding: "5rem",
});

const PageShell = ({ props, children }) => {
  return (
    <Container>
      <FilterContainer>
        <FilterList props={props} />
      </FilterContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default PageShell;
