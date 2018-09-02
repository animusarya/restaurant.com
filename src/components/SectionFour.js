import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  .subtitle {
    font-family:serif !important;
    line-height: 5px;
  }
  .para {
    font-family:serif !important;
    line-height: 0px;
  }
`;

const DishImage = styled.img`
  width :100%;
  :hover {
    width: 115%!important;
    height: 327px;
  }
`;

const SectionFour = () => (
  <Container className="section has-background-light">
    <div className="container">
      <div className="columns">
        <div className="column">
          <DishImage
            src="/images/fruit.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/fruit.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/Dish.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <DishImage
            src="/images/fruit.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/Dish.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/chikeen.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <DishImage
            src="/images/fruit.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/fruit.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/Dish.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <DishImage
            src="/images/fruit.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/Dish.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
        <div className="column">
          <DishImage
            src="/images/chikeen.jpg"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="subtitle is-size-6 has-text-black">CHESEBURGER</h1>
          <p className="is-size-7 has-text-black para">Lorem Ipsum has been the industry standard dummy  make a type book.</p>
        </div>
      </div>
    </div>
  </Container>
);

export default SectionFour;