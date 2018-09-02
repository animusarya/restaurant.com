import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100% !important;
`;

const Form = styled.div`
  width :100% !important;
  .input {
    margin-top: 3%;
    width: 73%;
    border: 1px solid lightgrey;
  }
  .textarea {
    height: 162px!important;
    margin-top: 19px;
    margin-left: 31px;
    border: 1px solid lightgrey;
  }
`;

const SubmitButton = styled.a`
  margin-right: 75%;
  width: 99px;
  height: 43px;
  font-size: 16px;
  border-radius: 0px;
  border: 1px solid black;
  color: black;
`;
const Contact = () => (
  <Container className="section has-background-light">
    <div className="container has-text-centered">
      <Form>
        <div className="columns is-gapless">
          <div className="column">
            <div className="control">
              <input className="input is-pulled-right has-text-black" type="text" placeholder="Your Name" />
            </div>
            <div className="control">
              <input className="input is-pulled-right" type="text" placeholder="Your Email " />
            </div>
            <div className="control">
              <input className="input is-pulled-right" type="text" placeholder="Your Phone Number" />
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                <textarea className="textarea " placeholder="Message" />
              </div>
            </div>
            <SubmitButton className="button">Submit</SubmitButton>
          </div>
        </div>
      </Form>
    </div>
  </Container>
);

export default Contact;
