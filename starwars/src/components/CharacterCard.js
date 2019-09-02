import React from 'react';
import '../App.css';
import { ContainerDiv, StyledName, StyledH2 } from './styles';

function CharacterCard(props) {
    console.log('Character Props', props);

    return (
        <ContainerDiv>
            <StyledName>Name: { props.name }</StyledName>
            <StyledH2>Birth Year: { props.birthDate } </StyledH2>
            <StyledH2>Gender: { props.gender } </StyledH2>
            <StyledH2>Height: { props.height} </StyledH2>
        </ContainerDiv>
    )
}

export default CharacterCard;