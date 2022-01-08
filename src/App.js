import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar} from './navbar/Navbar';
import {FormField} from './formfield/FormField'
import CoolButton from './cool-button/CoolButton' // named-import
import Signup from './signup/Signup'

const App = () => {
  return (
    <div>
      <Signup />
    </div>
  )
};

export default App;
