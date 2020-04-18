import React, { Component } from 'react';
import Cars from './components/Cars';
import Maman from './components/Maman';
import Display from './components/Display';
import Form from './components/Form';

class App extends Component {

  render() {
    // var membre={un:'mark',deux:'lea',trois:'justine'};
    // var {...rest}=membre;
    // console.log(rest);
    return (
      <div >
        <Cars />
        <hr />
        <Maman />
        <hr />
        <Display />
        <hr />
        <Form />
      </div>
    );
  }
}
export default App;