import React from 'react';

const Toto=(props)=>{
    
    const btnResponseEnfant=props.leState.messageMaman?(<button onClick={props.responseEnfant}>Repense</button>):(<button disabled>Repense</button>)
        return (
        <div>
           <h2>{props.name}</h2>
           {btnResponseEnfant}
           <p>{props.leState.messageEnfant}</p>
        </div>
    )
}
export default Toto;