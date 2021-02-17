import React, { useState } from "react";
import styled from "styled-components";

import Filter from "./components/Filter";

const SubFilterContainer = styled.div(({ active }) => ({
  display: active ? "flex" : "none",
  flexDirection: "column",
  width: "80%",
  paddingLeft: "3rem",
}));

const ClearFilterButton = styled.button(({ disabled }) => ({
  width: "100%",
  color: "grey",
  padding: ".5rem",
  marginTop: "1rem",
  border: "1px solid grey",
  opacity: disabled ? "50%" : "100%",
  cursor: disabled ? "not-allowed" : "pointer"
}));

const FilterList = ({ props }) => {
  const { state, dispatch } = props;
  const { activeFilters } = state;

  const [active, setActive] = useState({
    jpActiveState: false,
    idActiveState: false,
    enActiveState: false,
  });

  const filterClick = (payload) =>
    dispatch({ type: "EDIT_ACTIVE_FILTERS", payload });

  const clearFilterClick = () => dispatch({ type: "CLEAR_ACTIVE_FILTERS" });

  const selectAllJP = () => dispatch({ type: "SELECT_ALL_JP" });
  const selectAllID = () => dispatch({ type: "SELECT_ALL_ID" });
  const selectAllEN = () => dispatch({ type: "SELECT_ALL_EN" });

  return (
    <React.Fragment>
      <Filter
        isParent
        active={activeFilters.includes("JP")}
        title={"JP Region"}
        handleClick={() => selectAllJP()}
        dropdownClick={() =>
          setActive({
            ...active,
            jpActiveState: !active.jpActiveState,
          })
        }
        dropdownActive={active.jpActiveState}
      />
      <SubFilterContainer active={active.jpActiveState}>
        <Filter
          active={activeFilters.includes("JP0")}
          title={"Gen 0"}
          handleClick={() => filterClick("JP0")}
        />
        <Filter
          active={activeFilters.includes("JP1")}
          title={"Gen 1"}
          handleClick={() => filterClick("JP1")}
        />
        <Filter
          active={activeFilters.includes("JP2")}
          title={"Gen 2"}
          handleClick={() => filterClick("JP2")}
        />
        <Filter
          active={activeFilters.includes("JP3")}
          title={"Gen 3"}
          handleClick={() => filterClick("JP3")}
        />
        <Filter
          active={activeFilters.includes("JP4")}
          title={"Gen 4"}
          handleClick={() => filterClick("JP4")}
        />
        <Filter
          active={activeFilters.includes("JP5")}
          title={"Gen 5"}
          handleClick={() => filterClick("JP5")}
        />
        <Filter
          active={activeFilters.includes("GAMERS")}
          title={"Gamers"}
          handleClick={() => filterClick("GAMERS")}
        />
        <Filter
          active={activeFilters.includes("HOLOSTARS")}
          title={"Holostars"}
          handleClick={() => filterClick("HOLOSTARS")}
        />
      </SubFilterContainer>
      <Filter
        isParent
        active={activeFilters.includes("ID")}
        title={"ID Region"}
        handleClick={() => selectAllID()}
        dropdownClick={() =>
          setActive({
            ...active,
            idActiveState: !active.idActiveState,
          })
        }
        dropdownActive={active.idActiveState}
      />
      <SubFilterContainer active={active.idActiveState}>
        <Filter
          active={activeFilters.includes("ID1")}
          title={"Gen 1"}
          handleClick={() => filterClick("ID1")}
        />
        <Filter
          active={activeFilters.includes("ID2")}
          title={"Gen 2"}
          handleClick={() => filterClick("ID2")}
        />
      </SubFilterContainer>
      <Filter
        isParent
        active={activeFilters.includes("EN")}
        title={"EN Region"}
        handleClick={() => selectAllEN()}
        dropdownClick={() =>
          setActive({
            ...active,
            enActiveState: !active.enActiveState,
          })
        }
        dropdownActive={active.enActiveState}
      />
      <SubFilterContainer active={active.enActiveState}>
        <Filter
          active={activeFilters.includes("EN1")}
          title={"Gen 1"}
          handleClick={() => filterClick("EN1")}
        />
      </SubFilterContainer>
      <ClearFilterButton
        onClick={() => clearFilterClick()}
        disabled={activeFilters.length === 0}
      >
        Clear filters
      </ClearFilterButton>
    </React.Fragment>
  );
};

export default FilterList;
