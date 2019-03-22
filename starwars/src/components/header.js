import React from 'react';
import styled from 'styled-components';

function Header(props){
    return (
        <HeaderContainer>
            <h1 className="Header">React Wars</h1>
            <nav>
                <NavButton onClick={props.prev}>prev</NavButton>
                <NavButton onClick={props.next}>next</NavButton>
            </nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const NavButton = styled.button`
    min-height: 2rem;
    padding: 10px 3rem;
    margin: 0 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.2);

`

export default Header;