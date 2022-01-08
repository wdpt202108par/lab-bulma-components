import React from 'react';
import "bulma/css/bulma.css";
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton.js';

function Signup() {
  return (
    <div>
      <div id="navbar">
        <Navbar/>
      </div>
      <div id="formfield">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>   
        <FormField label="Password" type="password" placeholder="********"/>
      </div>
      <div id="button">
        <CoolButton class="button is-info">Sign up</CoolButton>
      </div>
    </div>
  )
}

export default Signup;