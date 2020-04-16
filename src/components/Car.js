import React from 'react';

const Car = ({children,color})=>{
        const colorInfo = color ? ( <p>{color}</p>):( <p>neat</p>);

        if(children)
        return (
           <div style={ {backgroundColor: 'pink',color :'white'} }>
           
               <h3>{children}</h3>
                <h4>{colorInfo}</h4>
           </div>
        )
        return (
            <div style={ {backgroundColor: 'pink',color :'white'} }>
                <h1> Hello React </h1>
                <p>pas de data</p>
                 
            </div>
         )
    
}
export default Car;