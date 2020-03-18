import React, { Component } from 'react';
import HomeScreen from './src/views/HomeScreen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <HomeScreen/>
    );
  }
}
