import React from 'react';

function Navbar (props){
    return (
        <div>
            <nav className="navbar is-transparent" />
    <div className="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
        Home
        </a>
        </div>
    </div>
    <div className="navbar-end">
        <div className="navbar-item">
        <div className="field is-grouped">
            <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" >
                <span>
                Login
                </span>
            </a>
            </p>
            <p className="control">
            <a className="button is-primary">
                <span>Signup</span>
            </a>
            </p>
        </div>
        </div>
    </div>
    </div>
        )
}

export default Navbar;