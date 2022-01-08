import React from 'react';
import FormField from './formfield/FormField.js';
import Navbar from './navbar/Navbar.js';

const App = () => {
  return  (
    <div className="App">
        <Navbar />
        <FormField label="Firstname" type="text" placeholder="John" />
        <FormField label="Couriel" type="email" placeholder="jdoe@gmail.com" />
    </div>
  );
};

export default App;