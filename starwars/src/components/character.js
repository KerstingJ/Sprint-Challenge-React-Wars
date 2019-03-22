import React from 'react';
import styled from 'styled-components';

function Character(props){
    console.log(props.char)
    const char = props.char;
    return (
        <CharContainer>
            {Object.keys(char).map(attr => <p key={attr}>{char[attr]}</p>)}
        </CharContainer>
    )
}

const CharContainer = styled.div`
    display: inline-block;
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    background: white;
`

export default Character;