import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar} from '../navbar/Navbar';
import {FormField} from '../formfield/FormField'
import CoolButton from '../cool-button/CoolButton' // named-import
import './Signup.css'

const Signup = props => {
  return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*******" />

      <CoolButton isSmall={true} isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
};

export default Signup;