import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #222222 !important;
  @media screen and (max-width: 600px) {
    height: 3%;
  }
  .navbar-burger {
    color: #fff !important;
    display: inherit;
    @media screen and (max-width: 600px) {
      margin-top: -14%;
  }
  .navbar-menu {
    transition-property: width;
    transition-duration: 2s;
  }
`;

const MobilMenu = styled.div`
  background-color: #fff;
  color: black;
  position: unset;
  left: 0px;
  top: 0px;
  height: auto;
  z-index: 2;
  padding: 1rem;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 53px;
  height: 50px;
  padding-top: 12px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isHidden: true,
    };
  }

  toggleMenu() {
    const { isHidden } = this.state;
    this.setState({
      isHidden: !isHidden,
    });
  }

  render() {
    const { isHidden } = this.state;
    return (
      <Container
        id="navMenu"
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Logo
              src="/images/logo.jpg"
              className="Image"
              alt="back-to-centere"
            />
          </div>
          <div
            id="navbar-menu-id"
            className={isHidden ? 'navbar-burger is-hidden' : 'navbar-burger'}
          >
            <div className="navbar-menu">
              <div className="navbar-start" />
              <div className="navbar-end ">
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  Home
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  About me
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  gallery
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  History
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  Menu
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  Reservation
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  Blog
                </a>
                <a
                  className="navbar-item is-size-6 has-text-white"
                  href="https://bulma.io/"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <a
            role="button"
            className={isHidden ? 'navbar-burger' : 'is-active navbar-burger'}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <MobilMenu
          className={
            isHidden
              ? 'has-text-centered is-hidden-desktop is-hidden'
              : 'has-text-centered is-hidden-desktop'
          }
        >
          <aside className="menu">
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              HOME
            </a>
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              ABOUT ME
            </a>
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              GALLERY
            </a>
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              BLOG
            </a>
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              CONTACT
            </a>
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              GENERIC
            </a>
            <a
              className="navbar-item is-size-7 has-text-black"
              href="https://bulma.io/"
            >
              ELEMENTS
            </a>
          </aside>
        </MobilMenu>
      </Container>
    );
  }
}
