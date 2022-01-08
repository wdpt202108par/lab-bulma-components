import Navbar from '../navbar/Navbar.js';
import formfield from '../formfield/FormField.js';
import Button from '../button/Button.js';
import React from 'react';
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField.js';



const Signup = props => {
    return (
        <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="ex. Julie" />
            <FormField label="Email Address" type="email" placeholder="julie@ironhack.com" />
            <FormField label="Password" type="password" />
            <Button isSmall isDanger className="button is-danger is-rounded">SignUp!</Button>
        </>
    )
};


export default Signup;
