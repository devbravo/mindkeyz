import React from 'react';
import HeaderSection from '../header/HeaderSection';
import GuideSection from '../guide/GuideSection';
import Store from '../store/Store';
import LicenseSection from '../license/LicenseSection';
import CreditSection from '../credit/CreditSection';
import FaqSection from '../faq/FaqSection';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeaderSection />
      <GuideSection />
      <Store />
      <LicenseSection />
      <CreditSection />
      <FaqSection />
    </Layout>
  );
};

export default Home;
