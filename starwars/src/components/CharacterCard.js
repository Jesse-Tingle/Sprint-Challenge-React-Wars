import React from 'react';
import '../App.css';


function CharacterCard(props) {
    console.log('Character Props', props);

    return (
        <div>
            <h1>Name: { props.name }</h1>
            <h2>Birth Year: { props.birthDate } </h2>
            <h2>Gender: { props.gender } </h2>
            <h2>Height: { props.height} </h2>
        </div>
    )
}

export default CharacterCard;