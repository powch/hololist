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
      ? state.activeFilters.filter(filter => filter !== payload)
      : state.activeFilters.concat([payload]);

    return {
      ...state,
      activeFilters: newActiveFilters,
    };
  }

  return state;
};

export default reducer;
