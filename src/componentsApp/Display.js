import React, { Component } from 'react';
import Users from './Singers';

class Display extends Component {

    render(){
        return(
            <div>
                <h1>Musiciens</h1>
                <Users name="eric beson" age="27" statut={false}>Hello World</Users>
                <Users name="bruno harlein" age="40" statut={true}>Hello World</Users>
                <Users name="kevin billet" age="29" statut={true}>Hello World</Users>
            </div>
        )
    }
}
export default Display;