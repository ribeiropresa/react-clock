import React, { Component } from 'react';
import PickyDateTime from 'react-picky-date-time';
import './App.css';

export class App extends Component {

  render() {

    return (
      <PickyDateTime
        size="s"
        mode={2}
        locale="en-us"
        show={true}
      />
    )
  }
}

export default App

