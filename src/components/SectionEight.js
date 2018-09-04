import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  background-image: url("images/coverEight.jpg");
  height: 455px!important;
  background-position: center;
  object-fit: cover;
   .container {
    margin-top: 6%;
    width: 61%;
   }
  .title {
    font-family: sans-serif !important;
  }
  .subtitle {
    font-family: sans-serif !important;
  }
  select {
    width: 357px!important;
  }
`;

const Button = styled.a`
  width: 169px;
  height: 47px;
  border: 1px solid black;
  color: black;
  margin-left: 43%;
  background-color: transparent;
  :hover {
    background-color: #464141;
    color: #fff;
  }
`;


const SectionEight = () => (
  <Container className="section has-background-light">
    <div className="container ">
      <h1 className="title is-size-4 has-text-white has-text-centered has-text-weight-normal">Reservation</h1>
      <div className="columns">
        <div className="column">
          <div className="control">
            <div className="select">
              <select>
                <option>Time</option>
                <option>5:30pm</option>
                <option>6:00pm</option>
                <option>9:30pm</option>
                <option>12:30</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="control">
            <div className="select">
              <select>
                <option>Day</option>
                <option>5:30pm</option>
                <option>6:00pm</option>
                <option>9:30pm</option>
                <option>12:30</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="control">
            <div className="select">
              <select>
                <option>People</option>
                <option>5:30pm</option>
                <option>6:00pm</option>
                <option>9:30pm</option>
                <option>12:30</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Button className="button is-outlined">Book Table</Button>
    </div>
  </Container>
);

export default SectionEight;
