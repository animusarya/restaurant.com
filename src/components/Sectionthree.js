import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  background-image: url("images/blackandwhite.jpg");
  height: 455px!important;
  background-position: center;
  .title {
    font-family: 'Romanesco', cursive !important;
  }
  .subtitle {
    font-family: sans-serif !important;
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

const Sectionthree = () => (
  <Container className="section has-background-light">
    <div className="container has-text-centered">
      <h1 className="title has-text-white is-size-1 has-text-weight-light is-italic">The Best Resturent</h1>
      <h3 className="subtitle has-text-white is-size-4 has-text-weight-light ">In Your Town</h3>
      <p className="para is-size-6 has-text-white"> The is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been <br />
          industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley<br />
          printer standard dummy text ever since the
          1500s, when an unknown printer took a galley<br />
           has survived  five centuries,
      </p>
      <ButtonPrev className="button is-primary is-inverted is-outlined">PREV</ButtonPrev>
      <ButtonNext className="button is-primary is-inverted is-outlined">NEXT</ButtonNext>
    </div>

  </Container>
);

export default Sectionthree;
