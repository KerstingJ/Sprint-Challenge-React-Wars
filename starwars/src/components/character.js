import React from 'react';
import styled from 'styled-components';

class Character extends React.Component {
    constructor(props){
        super(props)
        this.state = {homeworld: false};
        this.char = props.char;
        this.print = ["gender", "height", "mass"];
        this.homeworld = {};
    }

    componentDidMount() {
        this.get(this.char.homeworld);
    }

    get = URL => {
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.homeworld = data;
            this.setState({homeworld: true});
          })
          .catch(err => {
            throw new Error(err);
          });
    };

    render(){
        return (
            <CharContainer>
                <h2>{this.char.name}</h2>
                {Object.keys(this.char)
                    .filter(attr => this.print.includes(attr))
                    .map(attr => <Atr key={attr}><strong>{attr}:</strong> {this.char[attr]}</Atr>)
                }
                {this.state.homeworld ? <Atr><strong>Home World: </strong>{this.homeworld.name}</Atr>: ""}
            </CharContainer>
        )
    }
}

const CharContainer = styled.div`
    display: inline-block;
    text-align: left;
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    background: white;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
`

const Atr = styled.p`
    padding: 5px;
`

export default Character;