import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100% !important;
  height: 742px !important;
  .container {
    margin-top: 4%;
  }
  .title {
    font-family: sans-serif;
  }
  h2 {
    line-height: 15px;
    font-family: sans-serif;
  }
  p {
    line-height: 1px;
  }
  .icon {
    width: 30px;
    height: 39px;
    color: black;
    background-color: #fff;
    margin-right: 10px;
  }

`;

const ChifImage = styled.img`
  border-radius: 139px !important;
  width: 59% !important;
  height: 246px !important;
  object-fit: cover;
  margin-top: 21%;
`;

const SectionSix = () => (
  <Container className="section has-background-light">
    <div className="container has-text-centered">
      <h1 className="title is-size-4 has-text-black has-text-weight-normal">Meet Our Chefs </h1>
      <div className="columns">
        <div className="column">
          <ChifImage
            src="/images/Chif.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h2 className="is-size-5 has-text-black has-text-weight-normal">James T kirt</h2>
          <p className="is-size-6 has-text-black-ter has-text-weight-light">Doctor not a..</p>
          <i className="icon fab fa-facebook-square" />
          <i className="icon fab fa-linkedin" />
          <i className="icon fab fa-pinterest-square" />
        </div>
        <div className="column">
          <ChifImage
            src="/images/chif.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h2 className="is-size-5 has-text-black has-text-weight-normal">Leoand Mccoy</h2>
          <p className="is-size-6 has-text-black-ter has-text-weight-light">Pilot</p>
          <i className="icon fab fa-facebook-square" />
          <i className="icon fab fa-linkedin" />
          <i className="icon fab fa-pinterest-square" />
        </div>
        <div className="column">
          <ChifImage
            src="/images/chifethree.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h2 className="is-size-5 has-text-black has-text-weight-normal">Hikaru Sulu</h2>
          <p className="is-size-6 has-text-black-ter has-text-weight-light">Captain</p>
          <i className="icon fab fa-facebook-square" />
          <i className="icon fab fa-linkedin" />
          <i className="icon fab fa-pinterest-square" />
        </div>
      </div>
    </div>

  </Container>
);

export default SectionSix;
