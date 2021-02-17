import React from "react";
import styled from "styled-components";

const MainContainer = styled.div({
  border: "1px solid gray",
  display: "flex",
  flexDirection: "column",
  marginBottom: '3rem',
  borderRadius: "1rem",
  flex: "1",
});

const HeaderContainer = styled.div({
  padding: "1rem",
  borderBottom: "1px solid gray",
  display: "flex",
  flexDirection: "row",
});

const ImageContainer = styled.img({
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
});

const InfoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "1rem",
});

const NameContainer = styled.div({});

const ScreenNameContainer = styled.a({
  textDecoration: "none",
});

const BodyContainer = styled.div({
  display: 'flex',
  padding: "1rem",
  width: '100%'
});

const Message = ({ image, name, screenName, statusText, url }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <ImageContainer src={image} alt={"Profile picture"} />
        <InfoContainer>
          <NameContainer>{name}</NameContainer>
          <ScreenNameContainer
            href={url}
            target={"_blank"}
          >{`@${screenName}`}</ScreenNameContainer>
        </InfoContainer>
      </HeaderContainer>
      <BodyContainer>{statusText}</BodyContainer>
    </MainContainer>
  );
};

export default Message;
