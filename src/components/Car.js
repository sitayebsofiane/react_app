import React from 'react';

const Car = ({children,color,year})=>{
        const colorInfo = color ? ( <p>{color}</p>):( <p>neat</p>);

        if(children)
        return (
           <div style={ {backgroundColor: 'pink',color :'white'} }>
           
               <h3>{children}</h3>
                <h4>{colorInfo}</h4>
                <h4>{year}</h4>
           </div>
        )
        return (
           null
         )
    
}
export default Car;