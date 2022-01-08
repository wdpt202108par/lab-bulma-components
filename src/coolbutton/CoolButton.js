import React from 'react';
import './CoolButton.css'
import 'bulma/css/bulma.css';

function buttonClass(button) {
    if(button === "Button 1") {
      return "button is-rounded my-class is-danger is-small"
    } else if (button === "Button 2") {
          return "button is-small is-success"
        } else {
            return "button is-primary"
        }
  }

const CoolButton = props => {
    return (
      <div className='coolButton'>
        <button class = {buttonClass(props.children)}>{props.children}</button>
      </div>
    );
  };


export default CoolButton