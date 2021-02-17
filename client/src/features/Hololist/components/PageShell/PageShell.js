import React from "react";
import styled from "styled-components";

import FilterList from "./components/FilterList";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const BodyContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
});

const HeaderContainer = styled.div({
  display: "flex",
  minHeight: "3rem",
  backgroundColor: "grey",
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});

const FilterContainer = styled.div({
  height: "100vh",
  minWidth: "15rem",
  maxWidth: "15rem",
  padding: "1.5rem",
  backgroundColor: "#E5E5E5",
});

const ContentContainer = styled.div({
  height: "100%",
  padding: "5rem",
  width: "100%",
});

const Heading = styled.div({
  marginLeft: "1.5rem",
  fontSize: "2rem",
});

const RefreshButton = styled.button({
  backgroundColor: "#3fc380",
  color: "#FFFFFF",
  padding: ".5rem 1rem",
  borderRadius: "1rem",
  marginRight: "1.5rem",
});

const PageShell = ({ props, children, getTalentInfo }) => {
  const { dispatch } = props;
  return (
    <Container>
      <HeaderContainer>
        <Heading>hololist</Heading>
        <RefreshButton
          onClick={() =>
            getTalentInfo()
              .then((res) =>
                dispatch({ type: "INITIAL_DATA_LOAD", payload: res.data })
              )
              .catch((err) => console.log(err))
          }
        >
          Refresh
        </RefreshButton>
      </HeaderContainer>
      <BodyContainer>
        <FilterContainer>
          <FilterList props={props} />
        </FilterContainer>
        <ContentContainer>{children}</ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default PageShell;
