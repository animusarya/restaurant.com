import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width :100%!important;
  height: 582px!important;
  .title {
    font-family:serif;
    margin-top: 4%;
  }
  h4 {
    line-height: 1px;
    font-family:serif;
  }
  .para {
    line-height: 6px;
  }
`;

const FoodMenu = styled.div`
  margin-top: 5%;
`;

const SectionSeven = () => (
  <Container className="section has-background-grey-lighter">
    <div className="container">
      <h1 className="title has-text-black has-text-centered has-text-weight-normal is-size-4">Food Menu</h1>
      <FoodMenu>
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6">Wild Mushroom Butcani With Kale</h4>
                <p className="para has-text-left is-size-7">Mushroom/Veggie/White Sources</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$10.00</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6"> Lemon and Garlic Green Bains</h4>
                <p className="para has-text-left is-size-7">Lemon/Garlic/Bains</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$15.00</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6"> LambBeef kofka skeweres With Tzatziki</h4>
                <p className="para has-text-left is-size-7">Lamb//Wine/Butter</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$20.00</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6">Meatloaf With Black Pepper-Honey BBQ</h4>
                <p className="para has-text-left is-size-7">Pepper/chicken/Honey</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$25.00</h3>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6"> Wild Mushroom Butcani With Kale</h4>
                <p className="para has-text-left is-size-7">Mushroom/Veggie/White Sources</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$10.00</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6"> Lemon and Garlic Green Bains</h4>
                <p className="para has-text-left is-size-7">Lemon/Garlic/Bains</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$15.00</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6"> LambBeef kofka skeweres With Tzatziki</h4>
                <p className="para has-text-left is-size-7">Lamb//Wine/Butter</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$20.00</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h4 className="has-text-left has-text-weight-normal is-size-6">Meatloaf With Black Pepper-Honey BBQ</h4>
                <p className="para has-text-left is-size-7">Pepper/chicken/Honey</p>
              </div>
              <div className="column is-one-fifth">
                <h3 className="has-text-grey is-size-6 has-text-weight-normal">$25.00</h3>
              </div>
            </div>
          </div>
        </div>
      </FoodMenu>
    </div>
  </Container>
);

export default SectionSeven;
