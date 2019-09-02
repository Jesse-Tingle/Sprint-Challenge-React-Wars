import styled from 'styled-components';

// Variables
let RussoFamily = `Russo One`;
let ShareTechMono = `Share Tech Mono`

// Styles
export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1px;
    background-color: rgba(176, 188, 204, 0.8);
    width: 40%;
    margin-bottom: 25px;
    margin-right: 45px;
    border-radius: 30px;
`;

export const StyledName = styled.h1`
    font-family: ${RussoFamily}, sans-serif;
`;

export const StyledH2 = styled.h2`
    font-family: ${ShareTechMono}, monospace;
    font-size: 1.5rem;
`;
