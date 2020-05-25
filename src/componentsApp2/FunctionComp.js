import React from 'react';

function FunctionComp(props){
        console.log("%c render() du FunctionComp","color:orange");
    return (
        <div>
            <span className="orange">FunctionPureComp </span>{props.name}
        </div>
    )
}
export default React.memo(FunctionComp);