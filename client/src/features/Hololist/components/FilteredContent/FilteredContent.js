import React from "react";
import styled from "styled-components";

import Message from "./components/Message";

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const FilteredContent = ({ props }) => {
  const { state } = props;
  const { activeFilters, talents } = state;

  const filteredTalents = activeFilters.length
    ? activeFilters.reduce((acc, filter) => {
        const appliedFilter = talents.filter(
          (talent) => talent.branch && talent.branch.includes(filter)
        );
        return [...acc, ...appliedFilter];
      }, [])
    : null;

  return (
    <ContentContainer>
      {activeFilters.length
        ? filteredTalents.map((talent, idx) => (
            <Message
              key={`message-${idx}`}
              image={talent.profileImgUrl}
              name={talent.name}
              screenName={talent.screenName}
              statusText={talent.status.text}
              url={talent.url}
            />
          ))
        : null}
    </ContentContainer>
  );
};

export default FilteredContent;
