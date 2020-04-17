import React, { Fragment } from 'react';

const Toto=(props)=>{
    
    const btnResponseEnfant=props.leState.messageMaman?(<button onClick={props.responseEnfant}>Repense</button>):(<button disabled>Repense</button>)
        return (
        <Fragment>
           <h2>{props.name}</h2>
           {btnResponseEnfant}
           <p>{props.leState.messageEnfant}</p>
        </Fragment>
    )
}
export default Toto;