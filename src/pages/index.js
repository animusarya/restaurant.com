import React from 'react';

import Layout from '../components/Layout';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import Sectionthree from '../components/Sectionthree';
import SectionFour from '../components/SectionFour';
import SectionFive from '../components/SectionFive';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SectionOne />
        <SectionTwo />
        <Sectionthree />
        <SectionFour />
        <SectionFive />
      </Layout>
    );
  }
}
