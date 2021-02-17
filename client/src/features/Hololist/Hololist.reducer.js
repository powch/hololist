const reducer = (state, action) => {
  const { type, payload } = action;

  if (type.includes("INITIAL_DATA_LOAD")) {
    return {
      ...state,
      page: "home",
      talents: payload,
    };
  }

  if (type.includes("EDIT_ACTIVE_FILTERS")) {
    const newActiveFilters = state.activeFilters.includes(payload)
      ? state.activeFilters.filter((filter) => filter !== payload)
      : state.activeFilters.concat([payload]);

    return {
      ...state,
      activeFilters: newActiveFilters,
    };
  }

  if (type.includes("CLEAR_ACTIVE_FILTERS")) {
    return {
      ...state,
      activeFilters: [],
    };
  }

  if (type.includes("SELECT_ALL_JP")) {
    const JPFilters = [
      "JP0",
      "JP1",
      "JP2",
      "JP3",
      "JP4",
      "JP5",
      "GAMERS",
      "HOLOSTARS",
    ];

    const filtersToAdd = JPFilters.filter(
      (filter) => !state.activeFilters.includes(filter)
    );

    const newActiveFilters = filtersToAdd.length
      ? state.activeFilters.concat(filtersToAdd)
      : state.activeFilters.filter((filter) => !JPFilters.includes(filter));

    return {
      ...state,
      activeFilters: newActiveFilters,
    };
  }

  if (type.includes("SELECT_ALL_ID")) {
    const IDFilters = ["ID1", "ID2"];

    const filtersToAdd = IDFilters.filter(
      (filter) => !state.activeFilters.includes(filter)
    );

    const newActiveFilters = filtersToAdd.length
      ? state.activeFilters.concat(filtersToAdd)
      : state.activeFilters.filter((filter) => !IDFilters.includes(filter));

    return {
      ...state,
      activeFilters: newActiveFilters,
    };
  }

  if (type.includes("SELECT_ALL_EN")) {
    const ENFilters = ["EN1"];

    const filtersToAdd = ENFilters.filter(
      (filter) => !state.activeFilters.includes(filter)
    );

    const newActiveFilters = filtersToAdd.length
      ? state.activeFilters.concat(filtersToAdd)
      : state.activeFilters.filter((filter) => !ENFilters.includes(filter));

    return {
      ...state,
      activeFilters: newActiveFilters,
    };
  }

  return state;
};

export default reducer;
