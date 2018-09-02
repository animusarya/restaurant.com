import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100% !important;
  background-image: url("images/Review.jpg");
  height: 455px!important;
  background-position: center;
  .title {
    font-family: sans-serif !important;
  }
  .icon {
    color : #e4ba20 ;
  }
  h4 {
    margin-top: 3px;
  }
`;

const ButtonNext = styled.a`
  width: 10%;
  height: 73%;
  :hover {
  color: black !important;
}
`;

const ButtonPrev = styled.a`
  width: 10%;
  height: 73%;
  margin-right: 2%;
  :hover {
  color: black !important;
}
`;

const SectionTen = () => (
  <Container className="section has-background-light">
    <div className="container has-text-centered">
      <h3 className="title has-text-white is-size-4 has-text-weight-light ">Coustomer Review</h3>
      <p className="has-text-white is-size-6 has-text-weight-light"> "but also the leap into electronic typesetting, remaining essentially unchanged.<br />
        It was popularised in the 1960s with the release of Letraset  like  sheets containing<br />
        Lorem Ipsum passages,  and more recently with desktop publishing<br />
        software Aldus PageMaker including"<br />
      </p>
      <div>
        <i className="icon fas fa-star" />
        <i className="icon fas fa-star" />
        <i className="icon fas fa-star" />
        <i className="icon fas fa-star" />
        <i className="icon fas fa-star" />
        <h4 className="has-text-white is-size-6 ">Bad Cmadian</h4>
      </div>
      <ButtonPrev className="button is-primary is-inverted is-outlined">PREV</ButtonPrev>
      <ButtonNext className="button is-primary is-inverted is-outlined">NEXT</ButtonNext>
    </div>

  </Container>
);

export default SectionTen;
