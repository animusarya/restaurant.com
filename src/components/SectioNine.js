import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  height: 760px!important;
  .container {
    width: 61%!important;
    margin-top: 2%;
  }
  .title {
    font-family: serif !important;
    margin-top: 2%;
    margin-bottom: 8%;
    line-height: 9px
  }
  .subtitle {
    font-family: sans-serif !important;
  }
`;

const Images = styled.img`
  width: 86% !important;
  @media screen and (max-width: 600px) {
    margin-top: 14%;
  }
  :hover {
    width: 90% !important;
    height: 56%;
  }
`;

const Button = styled.a`
  width: 169px;
  height: 47px;
  border: 1px solid black;
  color: black;
  margin-left: 40%;
  :hover {
    background-color: #464141;
    color: #fff;
  }
`;


const SectionNine = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title has-text-black has-text-centered is-size-4 has-text-weight-normal">Latest Blog</h1>
      <div className="columns">
        <div className="column has-background-white-bis">
          {' '}
          <Images
            src="/images/handimage.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="title is-size-5 has-text-weight-light">
            Grand Hotel
          </h1>
          <p className="para is-size-7 has-text-black-ter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation
            ullamco laboris nisi ut aliquip exea.<br /> commodo consequat. Duis
            aute irure dolor in <br />reprehenderit in voluptate velit esse
            cillum dolore eu <br />
          </p>
        </div>
        <div className="column has-background-white-bis">
          <Images src="/images/bpimg.png" className="Image" alt="back-to-top" />
          <h1 className="title is-size-5 has-text-weight-light">
             STESTY FOOD
          </h1>
          <p className="para is-size-7 has-text-black-ter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation
            ullamco laboris nisi ut aliquip exea.<br /> commodo consequat. Duis
            aute irure dolor in <br />reprehenderit in voluptate velit esse
            cillum dolore eu <br />
          </p>
        </div>
        <div className="column has-background-white-bis">
          <Images
            src="/images/handimage.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="title is-size-5 has-text-weight-light">
            BEST FOOD
          </h1>
          <p className="para is-size-7 has-text-black-ter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation
            ullamco laboris nisi ut aliquip exea.<br /> commodo consequat. Duis
            aute irure dolor in <br />reprehenderit in voluptate velit esse
            cillum dolore eu <br />
          </p>
        </div>
      </div>
      <Button className="button is-outlined">Learn More</Button>
    </div>
  </Container>
);

export default SectionNine;
