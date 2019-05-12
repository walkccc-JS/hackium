import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import Hackium from '../img/Hackium.png';
import Google from '../img/Google.png';
import GitHub from '../img/GitHub.png';

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  renderButton() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="navbar-item">
            <a href="/auth/google" className="navbar-item">
              <img src={Google} alt="Google" width="28" height="28" />
            </a>
            <a href="/auth/github" className="navbar-item">
              <img src={GitHub} alt="GitHub" width="28" height="28" />
            </a>
          </div>
        );
      default:
        return (
          <div className="navbar-item">
            <a href="/api/logout" className="button is-primary">
              <strong>Logout</strong>
            </a>
          </div>
        );
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return <div className="navbar-item has-dropdown is-hoverable" />;
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              src={Hackium}
              alt="Hackium"
              width="28"
              height="28"
              style={{ marginRight: 5 }}
            />
            <span>
              <strong>Hackium</strong>
            </span>
          </Link>

          <Link
            to="#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <Link to={this.props.auth ? '/posts' : '/'} className="navbar-item">
            Dashboard
          </Link>
          <div className="navbar-start">{this.renderContent()}</div>
          <div className="navbar-end">{this.renderButton()}</div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  actions
)(Navbar);
