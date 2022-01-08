import React from 'react';
import "bulma/css/bulma.css";

function CoolButton(props) {
  return(
    <>
      <button class={props.class}>{props.children}</button>  
    </>
  )
}

export default CoolButton;