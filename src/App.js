import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';


const App = () => {
  return (
  <>
      <Navbar />
      <FormField label="Name" placeholder="ex. Julie" type="text"/>
      <FormField label="email" placeholder="ex. julie@ironhack.com" type="email"/>
  </>
  );
};

export default App;
