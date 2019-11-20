import React, { Component } from 'react';
import Card from '../Components/Card';

export default class Home extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(r => r.json())
      .then(data => {
        this.setState({ characters: data.results });
      });
  }

  renderCards = () => {
    const { characters } = this.state;
    if (characters.length) {
      return characters.map(char => <Card key={char.id} data={char} />);
    }
  };

  render() {
    return <div className="card-container">{this.renderCards()}</div>;
  }
}
