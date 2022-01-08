import React from 'react';
import 'bulma/css/bulma.css';


class Navbar extends React.Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="./Navbar.css"/>
            <nav className="navbar is-transparent">
            <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
  
            </a>
            <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <div class="navbar-start">
              <a class="navbar-item" href="/">
              Home
              </a>
            </div>
  
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="">
                      <span>
                        Login
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-primary" href="">
                      <span>Signup</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            </nav>
        </div>
        )
    }
};

export default Navbar 