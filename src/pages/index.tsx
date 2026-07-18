import React from 'react';

import Layout from '@theme/Layout';

import HomePage from '@site/src/components/homepage/homepage';

export default function Home() {
  return (
    <Layout
      title="Thomas Millar"
      description="Data Analyst and Data Engineer portfolio"
    >
      <HomePage />
    </Layout>
  );
}