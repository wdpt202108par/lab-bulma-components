import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class CoolButton extends Component {
    render() {
        // this.props vaut {}
        return (
        <div>
           <button class="button is-rounded my-class is-danger is-small">Login</button>;
           <button class="button is-small is-success">Signup</button>;
        </div>
        );
    }
}

export default CoolButton;