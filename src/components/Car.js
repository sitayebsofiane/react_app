import React from 'react';

const Car = ({nom,color,year})=>{
        const colorInfo = color ? ( <p>{color}</p>):( <p>neat</p>);

        if(nom)
        return (
           <div style={ {backgroundColor: 'pink',color :'white'} }>
           
               <h3>{nom}</h3>
                <h4>{colorInfo}</h4>
                <h5>{year}</h5>
           </div>
        )
        return (
           null
         )
    
}
export default Car;