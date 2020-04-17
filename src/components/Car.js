import React from 'react';

const Car = ({nom,color,year})=>{
        const colorInfo = color ? ( <p>{color}</p>):( <p>neat</p>);

        if(nom)
        return (
           <tr style={ {backgroundColor: 'pink',color :'white'} }>
           
               <td>{nom}</td>
                <td>{colorInfo}</td>
                <td>{year}</td>
           </tr>
        )
        return (
           null
         )
    
}
export default Car;