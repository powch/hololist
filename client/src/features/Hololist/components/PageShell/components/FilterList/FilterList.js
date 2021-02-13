import React from "react";

import Filter from "./components/Filter";

const FilterList = ({ props }) => {
  const { state, dispatch } = props;
  const { activeFilters } = state;

  const filterClick = (payload) =>
    dispatch({ type: "EDIT_ACTIVE_FILTERS", payload });

  return (
    <React.Fragment>
      <Filter
        active={activeFilters.includes("JP")}
        title={"JP"}
        handleClick={() => filterClick("JP")}
      />
      <Filter
        active={activeFilters.includes("ID")}
        title={"ID"}
        handleClick={() => filterClick("ID")}
      />
      <Filter
        active={activeFilters.includes("EN")}
        title={"EN"}
        handleClick={() => filterClick("EN")}
      />
    </React.Fragment>
  );
};

export default FilterList;
