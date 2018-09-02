import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  background-image: url("images/covereight.jpg");
  height: 455px!important;
  background-position: inherit;
  object-fit: cover;
  .title {
    font-family: sans-serif !important;
  }
  .subtitle {
    font-family: sans-serif !important;
  }
`;


const SectionEight = () => (
  <Container className="section has-background-light">
    <div className="container ">
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true" />
      </span>
        </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
          <a href="#" className="dropdown-item">
        Dropdown item
      </a>
          <a className="dropdown-item">
        Other dropdown item
      </a>
          <a href="#" className="dropdown-item is-active">
        Active dropdown item
      </a>
          <a href="#" className="dropdown-item">
        Other dropdown item
      </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
        With a divider
      </a>
        </div>
        </div>
      </div>

    </div>

  </Container>
);

export default SectionEight;
