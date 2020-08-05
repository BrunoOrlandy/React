import React from 'react';

function ButtonLink(props){
    //props => {objeto / valor que for passado}
    return (
        <a href={props.href} className={props.className}>
            {props.children} 
        </a>
    )
}

export default ButtonLink;