import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FormField extends Component {
    render() {
        // this.props vaut {}
        return (
        <div> 
            <div class="field">
                <label class="label">{this.props.label}</label>
                <div class="control">
                    <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
                </div>
            </div>
        </div>
        );
    }
}

export default FormField;