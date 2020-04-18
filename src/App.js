import React, { Component } from 'react';
import Cars from './components/Cars';
import Maman from './components/Maman';

class App extends Component{

    render(){
      var membre={un:'mark',deux:'lea',trois:'justine'};
      var {...rest}=membre;
      console.log(rest);
      return (
        <div>
          <Cars/>
          <Maman/>
        </div>
    );
    }
  }
export default App;