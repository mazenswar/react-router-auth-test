import React, { Component } from 'react';

export default class ShowPage extends Component {
  state = {
    character: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    fetch('https://rickandmortyapi.com/api/character/' + params.id)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        // debugger;
      });
  }

  render() {
    const { character } = this.state;
    return <div></div>;
  }
}
