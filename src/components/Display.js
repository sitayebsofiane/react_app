import React, { Component } from 'react';
import Users from './Singers';

class Display extends Component {

    render(){
        return(
            <div>
                <h1>Musicieciens</h1>
                <Users name="eric beson" age="27">Hello World</Users>
                <Users name="bruno harlein" age="40">Hello World</Users>
                <Users name="kevin billet" age="29">Hello World</Users>
            </div>
        )
    }
}
export default Display;