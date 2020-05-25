
import React, { Component } from 'react';
//import Bootstrap from './componentsApp2/Bootstrap';
//import ParentComp from './componentsApp2/ParentComponent';
import Profile from './componentsApp2/Profile';
import {Context} from './componentsApp2/MyContext';
import {user} from './componentsApp2/MyContext';
class App2 extends Component {
   
    render() {
      return (
        <Context.Provider value={user}>
         {/*<Bootstrap/>*/}
         {/* <ParentComp/> */}
         <hr/>
         <Profile/>
        </Context.Provider>
      );
    }
  }
  export default App2;