import React from "react";
import styled from "styled-components";

const MainContainer = styled.div({
    border: '1px solid gray',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1rem 3rem 0',
    borderRadius: '1rem',
    flex: '1'
});

const HeaderContainer = styled.div({
    padding: '1rem',
    borderBottom: '1px solid gray',
    display: 'flex',
    flexDirection: 'row'
});

const ImageContainer = styled.img({
    borderRadius: '50%',
    width: '3rem',
    height: '3rem'
});

const InfoContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem'
});

const NameContainer = styled.div({});

const ScreenNameContainter = styled.div({});

const BodyContainer = styled.div({
    padding: '1rem'
});

const Message = ({ image, name, screenName, statusText }) => {

    return(
        <MainContainer>
            <HeaderContainer>
                <ImageContainer src={image} alt={'Profile picture'} />
                <InfoContainer>
                    <NameContainer>{name}</NameContainer>
                    <ScreenNameContainter>{`@${screenName}`}</ScreenNameContainter>
                </InfoContainer>
            </HeaderContainer>
            <BodyContainer>
                {statusText}
            </BodyContainer>
        </MainContainer>
    )
};

export default Message;
