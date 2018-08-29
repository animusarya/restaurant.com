import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  .title {
    font-family: serif!important;
    margin-top: 4%;
  }
`;


const Button = styled.a`
  width: 11%;
  height: 48px;
  margin-left: 44%;
  background-color: transparent;
  color: #fff !important;
  font-size: 22px;
  :hover {
  color: black !important;
  background-color: #fff;
}
`;

const SectionFive = () => (
  <Container className="section has-background-grey">
    <div className="container">
      <h1 className="title is-size-3 has-text-centered has-text-black has-text-weight-normal">Our History</h1>
      <p className="para is-size-6 has-text-centered has-text-black"> Lorem Ipsum has been the industry standard dummy text ever <br />
        since the 1500s, when an unknown printer took a galley of <br />
        scrambled  centuries, it to make a type book. It has not only<br />
         five centuries, but also the leap into electronic typesetting, <br />
        remaining essentially unchanged.
      </p>
      <Button className="button">About us</Button>
    </div>
  </Container>
);

export default SectionFive;
