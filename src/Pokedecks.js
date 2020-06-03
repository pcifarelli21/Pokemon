import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedecks.css';

class Pokedecks extends Component {
    render () {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedecks-winner">Winning Hand</h1>;
        } else {
            title = <h1 className="Pokedecks-loser">Losing Hand</h1>;
        }
        return (
            <div className="Pokedecks">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedecks-cards">
                {this.props.pokemon.map((p) =>(
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
                </div>
            </div>
        );
    }
}

export default Pokedecks;