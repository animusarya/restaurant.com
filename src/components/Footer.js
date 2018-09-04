import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  .title {
    font-family: serif!important;
    margin-top: 4%;
  }
  .icon {
    width: 29px;
    height: 2%!important;
    margin-right: 1%;
  }
`;




const Footer = () => (
  <Container className="section has-background-black-ter	">
    <div className="container">
      <div>
        <i className="icon fab fa-facebook-square" />
        <i className="icon fab fa-twitter-square" />
        <i className="icon fab fa-google-plus-square" />
        <i className="icon fab fa-pinterest-square" />
        <i className="icon fas fa-envelope" />
      </div>

    </div>
  </Container>
);

export default Footer;
