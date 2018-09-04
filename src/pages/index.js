import React from 'react';

import Layout from '../components/Layout';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import SectionFive from '../components/SectionFive';
import SectionSix from '../components/SectionSix';
import SectionSeven from '../components/SectionSeven';
import SectionEight from '../components/SectionEight';
import SectionNine from '../components/SectioNine';
import SectionTen from '../components/SectionTen';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
        <Contact />
        <Footer />
      </Layout>
    );
  }
}
