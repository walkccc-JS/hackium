import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import Hackium from '../img/hackium.png';

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
    console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="button is-primary">
            <strong>Login with Google</strong>
          </a>
        );
      default:
        return (
          <a href="/api/logout" className="button is-primary">
            <strong>Logout</strong>
          </a>
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
            <img src={Hackium} alt="Hackium" width="28" height="28" style={{ marginRight: 5 }} />
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
          <Link to={this.props.auth ? '/current_page' : '/'} className="navbar-item">
            Dashboard
          </Link>
          <div className="navbar-start">{this.renderContent()}</div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">{this.renderButton()}</div>
            </div>
          </div>
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
