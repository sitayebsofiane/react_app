import React, { Component } from 'react';
import Cars from './components/Cars';
import Maman from './components/Maman';
import Display from './components/Display';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <>
        <Cars />
        <hr />
        <Maman />
        <hr />
        <Display />
        <hr />
        <Form />
      </>
    );
  }
}
export default App;