import React, { Component } from 'react';
import Cars from './componentsApp/Cars';
import Maman from './componentsApp/Maman';
import Display from './componentsApp/Display';
import Form from './componentsApp/Form';

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
        <Form head={false} />
      </>
    );
  }
}
export default App;