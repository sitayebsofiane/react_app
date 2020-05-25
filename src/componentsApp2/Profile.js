import React ,{ Component } from 'react';
import ProfileData from './ProfileData';
import {Context} from './MyContext';

class Profile extends Component{

    render(){
        let value = this.context;
        console.log(value)
        return(
            <div>
                <h1>xxxx {value.name}</h1>
                <ProfileData  />
            </div>
        )
    }
}
Profile.contextType=Context;
export default Profile;