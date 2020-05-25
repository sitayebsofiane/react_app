import React, { Component } from 'react';
import {Context} from './MyContext';

class ProfileData extends Component{
        render(){
            return(
        <Context.Consumer>

       {
            data=>{
                return(<p>
                    salam alikoum {data.name}
                </p>)
            }

       }
        </Context.Consumer>
    )
        }
}
export default ProfileData;