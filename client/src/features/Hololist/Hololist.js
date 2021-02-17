import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { getTalentInfo } from "./utils/API";

import PageShell from "./components/PageShell";
import FilteredContent from "./components/FilteredContent";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        height: 100vh;
    }

    #root {
      height: 100%;
    }
`;

const MainContainer = styled.div({
  height: '100%',
  width: '100%',
  overflow: 'hidden'
})

const EmptyFilterContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "grey",
});

const Hololist = (props) => {
  const { state, dispatch } = props;
  const { page, activeFilters } = state;
  const loading = page.includes("loading");

  useEffect(() => {
    loading &&
      getTalentInfo()
        .then((res) =>
          dispatch({ type: "INITIAL_DATA_LOAD", payload: res.data })
        )
        .catch((err) => console.log(err));
  });

  return (
    <MainContainer>
      <GlobalStyle />
      <PageShell props={props}>
        {activeFilters.length === 0 && !loading ? (
          <EmptyFilterContainer>
            Choose a filter on the left
          </EmptyFilterContainer>
        ) : null}
        {!loading ? (
          <FilteredContent props={props} />
        ) : (
          <EmptyFilterContainer>Loading...</EmptyFilterContainer>
        )}
      </PageShell>
    </MainContainer>
  );
};

export default Hololist;
